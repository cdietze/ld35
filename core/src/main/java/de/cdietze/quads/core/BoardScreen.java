package de.cdietze.quads.core;

import com.google.common.base.Optional;
import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.DialogKeeper;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Keyboard;
import playn.scene.GroupLayer;
import playn.scene.Layer;
import pythagoras.f.Dimension;
import react.Connection;
import react.RList;
import react.Slot;
import tripleplay.anim.Animation;
import tripleplay.ui.*;
import tripleplay.ui.layout.AxisLayout;
import tripleplay.ui.layout.BorderLayout;
import tripleplay.util.Layers;

import java.util.ArrayList;
import java.util.List;

import static de.cdietze.quads.core.PointUtils.toX;
import static de.cdietze.quads.core.PointUtils.toY;

public class BoardScreen extends Screen {

    private static final float fieldGapWidth = 0.03f;

    private interface Depths {
        float fields = -1f;
        float player = 10f;
        float buttons = 5f;
        float doors = 20f;
        float pushers = 15f;
        float expandos = 0f;
        float walls = 0f;
        float goals = 0f;
    }

    public final MainGame game;
    private final Sprites sprites;
    private final BoardState state;

    private Optional<DialogKeeper.Dialog> escapeDialog = Optional.absent();

    public BoardScreen(MainGame game, Level level) {
        super(game);
        this.game = game;
        this.sprites = new Sprites(this);
        this.state = new BoardState(level);
    }

    @Override
    public void wasAdded() {
        super.wasAdded();
        Root root = iface.createRoot(new BorderLayout(), UiUtils.newSheet(plat.graphics()), layer);
        // We define a maximum view size. Otherwise sprites become really blurry and its just too big
        Dimension maxSize = new Dimension(1200, 800);
        float width = Math.min(maxSize.width, plat.graphics().viewSize.width());
        float height = Math.min(maxSize.height, plat.graphics().viewSize.height());
        root.setSize(width, height);
        root.setLocation((plat.graphics().viewSize.width() - width) * .5f, (plat.graphics().viewSize.height() - height) * .5f);
        Board board = new Board();
        ScaledElement boardElement = new ScaledElement(board.rootLayer);
        boardElement.addStyles(Style.BACKGROUND.is(Background.blank().inset(10f)));

        root.add(boardElement.setConstraint(BorderLayout.CENTER));
    }

    private final class Board {
        public final GroupLayer rootLayer = new GroupLayer();
        private final GroupLayer gridLayer = new GroupLayer();
        private final Level level = state.level;

        public Board() {
            rootLayer.setSize(level.dim.width(), level.dim.height()).setOrigin(Layer.Origin.CENTER);
            rootLayer.addAt(gridLayer, .5f, .5f);
            float margin = fieldGapWidth;
            Layer backgroundLayer = Layers.solid(0xaa666666, rootLayer.width() + margin, rootLayer.height() + margin).setOrigin(Layer.Origin.CENTER).setDepth(-1f);
            rootLayer.addAt(backgroundLayer, rootLayer.width() * .5f, rootLayer.height() * .5f);
            createFieldLayers();
            createPlayerLayer(state.playerEntity);
            initEntityLayers();
            initWinListener();
            initInput();
            initTitleDialog();
        }

        private void initTitleDialog() {
            Group group = UiUtils.createDialogGroup(plat);
            group.add(new Label(Levels.fullTitle(level)));
            DialogKeeper.Dialog display = createDialog(AxisLayout.vertical(), UiUtils.newSheet(plat.graphics())).add(group).slideTopDown().display();
            iface.anim.delay(3000).then().action(display.dismissSlot());
        }

        private Layer createPlayerLayer(BoardState.PlayerEntity player) {
            final GroupLayer group = new GroupLayer();
            final List<Layer> layers = new ArrayList<>();
            player.tail.connectNotify(new RList.Listener<Integer>() {
                @Override public void onAdd(int index, Integer fieldIndex) {
                    int x = toX(level.dim, fieldIndex);
                    int y = toY(level.dim, fieldIndex);
                    Layer layer = sprites.createTailLayer();
                    group.addAt(layer, x, y);
                    layers.add(index, layer);
                }
                @Override public void onRemove(int index, Integer fieldIndex) {
                    layers.remove(index).close();
                }
            });

            final Layer headLayer = sprites.createHeadLayer();
            group.add(headLayer);
            group.setDepth(Depths.player);
            player.fieldIndex.connectNotify(new Slot<Integer>() {
                @Override public void onEmit(Integer headFieldIndex) {
                    int x = toX(level.dim, headFieldIndex);
                    int y = toY(level.dim, headFieldIndex);
                    headLayer.setTranslation(x, y);
                }
            });
            gridLayer.add(group);
            return group;
        }

        private void initInput() {
            final Connection conn = plat.input().keyboardEvents.connect(new Keyboard.KeySlot() {

                @Override public void onEmit(Keyboard.KeyEvent event) {
                    if (!event.down) return;
                    switch (event.key) {
                        case LEFT:
                        case A:
                            state.tryMovePlayer(Direction.LEFT);
                            break;
                        case RIGHT:
                        case D:
                            state.tryMovePlayer(Direction.RIGHT);
                            break;
                        case UP:
                        case W:
                            state.tryMovePlayer(Direction.UP);
                            break;
                        case DOWN:
                        case S:
                            state.tryMovePlayer(Direction.DOWN);
                            break;
                        case ESCAPE:
                            toggleEscapeDialog();
                            break;
                    }
                }
            });
            closeOnHide(conn);
        }

        private void initWinListener() {
            state.playerWon.connectNotify(new Slot<Boolean>() {
                @Override public void onEmit(Boolean won) {
                    if (!won) return;
                    final int levelIndex = Levels.levels.indexOf(level);
                    if (levelIndex >= 0 && levelIndex + 1 < Levels.levels.size()) {
                        // Move silently on to the next level
                        game.screens.replace(new BoardScreen(game, Levels.levels.get(levelIndex + 1)));
                        return;
                    }
                    Group group = UiUtils.createDialogGroup(plat);
                    group.add(new Label("You solved it!"));
                    group.add(new Label("You finished all levels. Congratulations!"));
                    group.add(new Button("Main Menu").onClick(new Slot<Button>() {
                        @Override public void onEmit(Button event) {
                            game.screens.remove(BoardScreen.this);
                        }
                    }));
                    createDialog(AxisLayout.vertical(), UiUtils.newSheet(plat.graphics())).add(group).useShade().slideTopDown().display();
                }
            });
        }

        private void toggleEscapeDialog() {
            if (escapeDialog.isPresent()) {
                escapeDialog.get().close();
                escapeDialog = Optional.absent();
                return;
            }
            Group group = UiUtils.createDialogGroup(plat);
            group.add(new Button("Restart").onClick(new Slot<Button>() {
                @Override
                public void onEmit(Button event) {
                    game.screens.replace(new BoardScreen(game, level));
                }
            }));
            group.add(new Button("Main Menu").onClick(new Slot<Button>() {
                @Override public void onEmit(Button event) {
                    game.screens.remove(BoardScreen.this);
                }
            }));
            escapeDialog = Optional.of(createDialog(AxisLayout.vertical(), UiUtils.newSheet(plat.graphics())).add(group).useShade().slideTopDown().display());
        }

        private void initEntityLayers() {
            final List<Layer> entityLayers = new ArrayList<>();
            state.entities.connectNotify(new RList.Listener<BoardState.Entity>() {
                @Override
                public void onAdd(final int index, final BoardState.Entity entity) {
                    Layer entityLayer = entityLayerProvider.createLayer(entity);
                    entityLayers.add(index, entityLayer);
                    entity.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(entityLayer));
                    gridLayer.add(entityLayer);
                    entity.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(entityLayer));
                }

                @Override
                public void onRemove(int index, BoardState.Entity elem) {
                    entityLayers.remove(index).close();
                }
            });
        }
        private Slot<Integer> moveLayerWithFieldIndexSlot(final Layer layer) {
            return new Slot<Integer>() {
                @Override public void onEmit(Integer fieldIndex) {
                    int x = toX(level.dim, fieldIndex);
                    int y = toY(level.dim, fieldIndex);
                    layer.setTranslation(x, y);
                }
            };
        }

        private List<Layer> createFieldLayers() {
            ImmutableList.Builder<Layer> builder = ImmutableList.builder();
            for (int fieldIndex = 0; fieldIndex < level.fieldCount; ++fieldIndex) {
                Layer fieldLayer = BoardScreen.createFieldLayer().setDepth(Depths.fields);
                int x = toX(level.dim, fieldIndex);
                int y = toY(level.dim, fieldIndex);
                gridLayer.addAt(fieldLayer, x, y);
                builder.add(fieldLayer);
            }
            return builder.build();
        }

        private EntityLayerProvider entityLayerProvider = new EntityLayerProvider() {
            @Override public Layer createLayer(BoardState.Entity entity) {
                final int blueDoorTint = 0xff8D8DEB;
                switch (entity.type) {
                    case WALL:
                        return createFieldLayer().setTint(0xff222222).setDepth(Depths.walls);
                    case PUSHER:
                        return sprites.createPusherLayer().setDepth(Depths.pushers);
                    case EXPANDO:
                        return sprites.createExpandoLayer().setDepth(Depths.expandos);
                    case BUTTON:
                        return sprites.createButtonLayer().setTint(blueDoorTint).setDepth(Depths.buttons);
                    case DOOR: {
                        BoardState.DoorEntity door = (BoardState.DoorEntity) entity;
                        // Put this layer in a container for clipping and animating
                        GroupLayer group = new GroupLayer(1f, 1f);
                        group.setOrigin(Layer.Origin.CENTER).setDepth(Depths.doors);
                        final Layer layer = sprites.createDoorLayer().setTint(blueDoorTint);
                        group.addAt(layer, .5f, .5f);
                        door.isOpen.connectNotify(new Slot<Boolean>() {
                            Animation.Handle handle = null;
                            @Override public void onEmit(Boolean isOpen) {
                                float closedY = .5f;
                                float openY = 1.2f;
                                if (handle != null) {handle.cancel(); handle = null;}
                                if (isOpen) {
                                    handle = iface.anim.tweenY(layer).to(openY).easeInOut().handle();
                                } else {
                                    handle = iface.anim.tweenY(layer).to(closedY).easeInOut().handle();
                                }
                            }
                        });
                        return group;
                    }
                    case GOAL: {
                        return sprites.createGoalLayer().setDepth(Depths.goals);
                    }
                    default:
                        throw new AssertionError("Unknown entity type: " + entity.type);
                }
            }
        };
    }

    private static Layer createFieldLayer() {
        Layer l = Layers.solid(0xff999999, 1f - 2 * fieldGapWidth, 1f - 2 * fieldGapWidth).setOrigin(Layer.Origin.CENTER);
        return l;
    }

    interface EntityLayerProvider {
        Layer createLayer(BoardState.Entity entity);
    }
}
