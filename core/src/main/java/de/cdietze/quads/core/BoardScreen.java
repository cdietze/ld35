package de.cdietze.quads.core;

import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Keyboard;
import playn.scene.GroupLayer;
import playn.scene.Layer;
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

    private final BoardState state;
    private final Sprites sprites;

    public BoardScreen(MainGame game, BoardState state) {
        super(game);
        this.state = state;
        this.sprites = new Sprites(plat);
    }

    @Override
    public void wasAdded() {
        super.wasAdded();
        Root root = iface.createRoot(new BorderLayout(), SimpleStyles.newSheet(plat.graphics()), layer);
        root.setSize(plat.graphics().viewSize);

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
            Layer backgroundLayer = Layers.solid(0xAA000000, rootLayer.width(), rootLayer.height());
            rootLayer.add(backgroundLayer.setDepth(-1f));
            createFieldLayers();
            createPlayerLayer(state.playerEntity);
            initEntityLayers();
            initWinListener();
            initInput();
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
            closeOnHide(plat.input().keyboardEvents.connect(new Keyboard.KeySlot() {

                @Override public void onEmit(Keyboard.KeyEvent event) {
                    if (!event.down) return;
                    switch (event.key) {
                        case LEFT:
                            state.tryMovePlayer(Direction.LEFT);
                            break;
                        case RIGHT:
                            state.tryMovePlayer(Direction.RIGHT);
                            break;
                        case UP:
                            state.tryMovePlayer(Direction.UP);
                            break;
                        case DOWN:
                            state.tryMovePlayer(Direction.DOWN);
                            break;
                    }
                }
            }));
        }

        private void initWinListener() {
            state.playerWon.connectNotify(new Slot<Boolean>() {
                @Override public void onEmit(Boolean won) {
                    if (!won) return;
                    createDialog(createWinPanel()).useShade().slideTopDown().display();
                }
            });
        }

        private Group createWinPanel() {
            /** Use the colors from {@link SimpleStyles} */
            int bgColor = 0xFFCCCCCC, ulColor = 0xFFEEEEEE, brColor = 0xFFAAAAAA;
            Group group = new Group(AxisLayout.vertical()).setStyles(Style.BACKGROUND.is(Background.roundRect(plat.graphics(), bgColor, 5, ulColor, 2).inset(20f)));
            group.add(new Label("You won!"));
            group.add(new Button("Next Level").onClick(new Slot<Button>() {
                @Override
                public void onEmit(Button event) {
                    // TODO
                }
            }));
            return group;
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
                        return sprites.createGoalLayer().setDepth(Depths.player);
                    }
                    default:
                        throw new AssertionError("Unknown entity type: " + entity.type);
                }
            }
        };
    }

    private static Layer createFieldLayer() {
        Layer l = Layers.solid(0xff555555, .9f, .9f).setOrigin(Layer.Origin.CENTER);
        return l;
    }

    interface EntityLayerProvider {
        Layer createLayer(BoardState.Entity entity);
    }
}
