package de.cdietze.quads.core;

import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Keyboard;
import playn.scene.GroupLayer;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import react.RList;
import react.Slot;
import tripleplay.ui.Background;
import tripleplay.ui.Root;
import tripleplay.ui.SimpleStyles;
import tripleplay.ui.Style;
import tripleplay.ui.layout.BorderLayout;
import tripleplay.util.Layers;

import java.util.ArrayList;
import java.util.List;

import static de.cdietze.quads.core.PointUtils.toX;
import static de.cdietze.quads.core.PointUtils.toY;

public class BoardScreen extends Screen {

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

        private final List<Layer> fieldLayers;

        public Board() {
            rootLayer.setSize(level.dim.width(), level.dim.height()).setOrigin(Layer.Origin.CENTER);
            rootLayer.addAt(gridLayer, .5f, .5f);
            Layer backgroundLayer = Layers.solid(0xAA000000, rootLayer.width(), rootLayer.height());
            rootLayer.add(backgroundLayer.setDepth(-1f));
            fieldLayers = createFieldLayers();
            createPlayerLayer(state.playerEntity);
            initEntityLayers();
            initGoalLayer();
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

        private void initGoalLayer() {
            int fieldIndex = level.playerGoal;
            int x = toX(level.dim, fieldIndex);
            int y = toY(level.dim, fieldIndex);
            ImageLayer layer = sprites.createEntityLayer();
            layer.setTint(0xff00ff00);

            gridLayer.addAt(layer, x, y);
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
                Layer fieldLayer = BoardScreen.createFieldLayer();
                int x = toX(level.dim, fieldIndex);
                int y = toY(level.dim, fieldIndex);
                gridLayer.addAt(fieldLayer, x, y);
                builder.add(fieldLayer);
            }
            return builder.build();
        }

        private EntityLayerProvider entityLayerProvider = new EntityLayerProvider() {
            @Override public Layer createLayer(BoardState.Entity entity) {
                switch (entity.type) {
                    case WALL:
                        return createFieldLayer().setTint(0xff222222);
                    case PUSHER:
                        return sprites.createPusherLayer();
                    case EXPANDO:
                        return sprites.createEntityLayer().setTint(0xffff0000);
                    case BUTTON:
                        return sprites.createButtonLayer().setTint(0xff8D8DEB);
                    case DOOR: {
                        BoardState.DoorEntity door = (BoardState.DoorEntity) entity;
                        final Layer layer = sprites.createEntityLayer();
                        door.isOpen.connectNotify(new Slot<Boolean>() {
                            @Override public void onEmit(Boolean isOpen) {
                                layer.setTint(isOpen ? 0xff0000ff : 0xff000099);
                            }
                        });
                        return layer;
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
