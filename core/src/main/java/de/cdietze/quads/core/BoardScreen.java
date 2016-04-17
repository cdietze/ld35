package de.cdietze.quads.core;

import com.google.common.base.Optional;
import de.cdietze.playn_util.DialogKeeper;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Keyboard;
import playn.core.Sound;
import playn.scene.GroupLayer;
import playn.scene.Layer;
import pythagoras.f.Dimension;
import react.Connection;
import react.RList;
import react.Slot;
import react.UnitSignal;
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
    private static final Dimension maxSize = new Dimension(1200, 800);
    private static final float maxDialogWidth = 400f;

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
            initSoundListeners();
        }
        private void initSoundListeners() {
            state.expandoConsumed.connect(new Slot<BoardState.ExpandoEntity>() {
                @Override public void onEmit(BoardState.ExpandoEntity event) {
                    eatExpando.play();
                }
            });
        }

        private void initTitleDialog() {
            Group group = UiUtils.createDialogGroup(plat);
            group.add(new Label(Levels.fullTitle(level)).addStyles(Style.TEXT_WRAP.on));
            DialogKeeper.Dialog dialog = createDialog(AxisLayout.vertical(), UiUtils.newSheet(plat.graphics())).add(group).slideTopDown().display(maxDialogWidth);
            iface.anim.delay(4000).then().action(dialog.dismissSlot());
            userInput.connect(dialog.dismissSlot());
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

        private UnitSignal userInput = new UnitSignal();

        private void initInput() {
            final Connection conn = plat.input().keyboardEvents.connect(new Keyboard.KeySlot() {

                @Override public void onEmit(Keyboard.KeyEvent event) {
                    if (!event.down) return;
                    switch (event.key) {
                        case LEFT:
                        case A:
                            tryMove(Direction.LEFT);
                            break;
                        case RIGHT:
                        case D:
                            tryMove(Direction.RIGHT);
                            break;
                        case UP:
                        case W:
                            tryMove(Direction.UP);
                            break;
                        case DOWN:
                        case S:
                            tryMove(Direction.DOWN);
                            break;
                        case ESCAPE:
                            toggleEscapeDialog();
                            break;
                        default: return;
                    }
                    userInput.emit();
                }
            });
            closeOnHide(conn);
        }

        private void tryMove(Direction dir) {
            if (!state.tryMovePlayer(dir)) {
                cannotMove.play();
            }
        }

        private void initWinListener() {
            state.playerWon.connectNotify(new Slot<Boolean>() {
                @Override public void onEmit(Boolean won) {
                    if (!won) return;
                    goalReached.play();
                    final int levelIndex = Levels.levels.indexOf(level);
                    if (levelIndex >= 0 && levelIndex + 1 < Levels.levels.size()) {
                        // Move silently on to the next level
                        game.screens.replace(new BoardScreen(game, Levels.levels.get(levelIndex + 1)));
                        return;
                    }
                    Group group = UiUtils.createDialogGroup(plat);
                    group.add(new Label("This is it."));
                    group.add(new Label("Thanks for playing!"));
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
            final List<Optional<Layer>> entityLayers = new ArrayList<>();
            state.entities.connectNotify(new RList.Listener<BoardState.Entity>() {
                @Override
                public void onAdd(final int index, final BoardState.Entity entity) {
                    Optional<Layer> entityLayer = createEntityLayer(entity);
                    entityLayers.add(index, entityLayer);
                    if (entityLayer.isPresent()) {
                        entity.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(entityLayer.get()));
                        gridLayer.add(entityLayer.get());
                        entity.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(entityLayer.get()));
                    }
                }

                @Override
                public void onRemove(int index, BoardState.Entity elem) {
                    Optional<Layer> removed = entityLayers.remove(index);
                    if (removed.isPresent()) removed.get().close();
                }
            });
        }

        private Optional<Layer> createEntityLayer(BoardState.Entity entity) {
            final int blueDoorTint = 0xff8D8DEB;
            switch (entity.type) {
                case WALL:
                    return Optional.absent();
                case PUSHER:
                    return Optional.of(sprites.createPusherLayer().setDepth(Depths.pushers));
                case EXPANDO:
                    return Optional.of(sprites.createExpandoLayer().setDepth(Depths.expandos));
                case BUTTON: {
                    BoardState.ButtonEntity button = (BoardState.ButtonEntity) entity;
                    // Put this layer in a container for clipping and animating
                    GroupLayer group = new GroupLayer(1f, 1f);
                    group.setOrigin(Layer.Origin.CENTER).setDepth(Depths.buttons);
                    final Layer layer = sprites.createButtonLayer().setTint(blueDoorTint);
                    group.addAt(layer, .5f, .5f);
                    button.isDown.connectNotify(new Slot<Boolean>() {
                        Animation.Handle handle = null;
                        @Override public void onEmit(Boolean isDown) {
                            if (isDown) buttonPressed.play();
                            float upY = .5f;
                            float downY = .55f;
                            if (handle != null) {handle.cancel(); handle = null;}
                            handle = iface.anim.tweenY(layer).to(isDown ? downY : upY).in(100f).handle();
                        }
                    });
                    return Optional.<Layer>of(group);
                }
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
                            handle = iface.anim.tweenY(layer).to(isOpen ? openY : closedY).easeInOut().handle();
                        }
                    });
                    door.isOpen.connect(new Slot<Boolean>() {
                        @Override public void onEmit(Boolean isOpen) {
                            // Delay this sound a bit to avoid collisions with button-sounds.
                            // Also, the door just needs a bit to get moving
                            iface.anim.delay(400).then().play(isOpen ? doorOpens : doorCloses);
                        }
                    });
                    return Optional.<Layer>of(group);
                }
                case GOAL: {
                    return Optional.of(sprites.createGoalLayer().setDepth(Depths.goals));
                }
                default:
                    throw new AssertionError("Unknown entity type: " + entity.type);
            }
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

        private void createFieldLayers() {
            for (int fieldIndex = 0; fieldIndex < level.fieldCount; ++fieldIndex) {
                if (state.level.walls.contains(fieldIndex)) {
                    // Walls are gaps
                    continue;
                }
                Layer fieldLayer = BoardScreen.createFieldLayer().setDepth(Depths.fields);
                int x = toX(level.dim, fieldIndex);
                int y = toY(level.dim, fieldIndex);
                gridLayer.addAt(fieldLayer, x, y);
            }
        }

    }

    private static Layer createFieldLayer() {
        Layer l = Layers.solid(0xff999999, 1f - 2 * fieldGapWidth, 1f - 2 * fieldGapWidth).setOrigin(Layer.Origin.CENTER);
        return l;
    }

    private Sound buttonPressed = plat.assets().getSound("sounds/button_pressed");
    private Sound cannotMove = plat.assets().getSound("sounds/cannot_move");
    private Sound doorCloses = plat.assets().getSound("sounds/door_closes");
    private Sound doorOpens = plat.assets().getSound("sounds/door_opens");
    private Sound goalReached = plat.assets().getSound("sounds/goal_reached");
    private Sound eatExpando = plat.assets().getSound("sounds/eat_expando");

}
