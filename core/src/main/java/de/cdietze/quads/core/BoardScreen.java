package de.cdietze.quads.core;

import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Canvas;
import playn.core.Image;
import playn.core.Keyboard;
import playn.core.Path;
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

    public BoardScreen(MainGame game, BoardState state) {
        super(game);
        this.state = state;
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
            initPlayerLayer();
            initPiecesLayers();
            initGoalLayer();
            initInput();
        }

        private void initPlayerLayer() {
            final GroupLayer group = new GroupLayer();
            final List<Layer> layers = new ArrayList<>();
            state.playerTail.connectNotify(new RList.Listener<Integer>() {
                @Override public void onAdd(int index, Integer fieldIndex) {
                    int x = toX(level.dim, fieldIndex);
                    int y = toY(level.dim, fieldIndex);
                    Layer layer = createPlayerLayer();
                    group.addAt(layer, x, y);
                    layers.add(index, layer);
                }
                @Override public void onRemove(int index, Integer fieldIndex) {
                    layers.remove(index).close();
                }
            });

            final Layer headLayer = createPlayerLayer();
            headLayer.setTint(0xffff0000);
            group.add(headLayer);
            state.playerHead.connectNotify(new Slot<Integer>() {
                @Override public void onEmit(Integer headFieldIndex) {
                    int x = toX(level.dim, headFieldIndex);
                    int y = toY(level.dim, headFieldIndex);
                    headLayer.setTranslation(x, y);
                }
            });
            gridLayer.add(group);
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
            ImageLayer layer = createPieceLayer();
            layer.setTint(0xff00ff00);

            gridLayer.addAt(layer, x, y);
        }

        private void initPiecesLayers() {
            final List<Layer> pieceLayers = new ArrayList<>();
            state.blocks.connectNotify(new RList.Listener<BoardState.Block>() {
                @Override
                public void onAdd(final int index, final BoardState.Block block) {
                    Layer layer1 = pieceLayerProvider.createLayer(block);
                    block.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(layer1));
                    final Layer pieceLayer = layer1;
                    gridLayer.add(pieceLayer);
                    pieceLayers.add(index, pieceLayer);

                    block.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(pieceLayer));
                }

                @Override
                public void onRemove(int index, BoardState.Block elem) {
                    pieceLayers.remove(index).close();
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

        private ImageLayer createPieceLayer() {
            ImageLayer imageLayer = new ImageLayer(circleImage);
            imageLayer.setSize(.8f, .8f).setOrigin(Layer.Origin.CENTER);
            return imageLayer;
        }

        private ImageLayer createPlayerLayer() {
            ImageLayer imageLayer = new ImageLayer(drawHeartImage());
            imageLayer.setSize(.8f, .8f).setOrigin(Layer.Origin.CENTER);
            return imageLayer;
        }

        private PieceLayerProvider pieceLayerProvider = new PieceLayerProvider() {
            @Override public Layer createLayer(BoardState.Block block) {
                switch (block.type) {
                    case WALL:
                        return createFieldLayer().setTint(0xff222222);
                    case PLAIN:
                        return createPieceLayer();
                    case EXPANDO:
                        return createPieceLayer().setTint(0xffff0000);
                    case BUTTON:
                        return createPieceLayer().setTint(0xff0000ff);
                    case DOOR: {
                        BoardState.DoorBlock door = (BoardState.DoorBlock) block;
                        final Layer layer = createPieceLayer();
                        door.isOpen.connectNotify(new Slot<Boolean>() {
                            @Override public void onEmit(Boolean isOpen) {
                                layer.setTint(isOpen ? 0xff0000ff : 0xff000099);
                            }
                        });
                        return layer;
                    }
                    default:
                        throw new AssertionError("Unknown block type: " + block.type);
                }
            }
        };

        private Image circleImage = drawCircleImage();
        private Image crossImage = drawCrossImage();

        private Image drawCircleImage() {
            float size = 100;
            float radius = .45f * size;
            Canvas canvas = plat.graphics().createCanvas(size, size);
            canvas.setStrokeColor(0xffffffff);
            canvas.setStrokeWidth(size / 20);
            canvas.strokeCircle(size / 2, size / 2, radius);
            return canvas.image;
        }

        private Image drawHeartImage() {
            float size = 100;
            float radius = .2f * size;
            float margin = .1f * size;
            Canvas canvas = plat.graphics().createCanvas(size, size);
            canvas.setFillColor(0xffffffff);
            canvas.fillCircle(margin + radius, margin + radius, radius);
            canvas.fillCircle(size - (margin + radius), margin + radius, radius);
            float pathYStart = margin + .25f * size;
            Path path = canvas.createPath().moveTo(margin, pathYStart).lineTo(size / 2, size - margin).lineTo(size - margin, pathYStart).close();
            canvas.fillPath(path);
            return canvas.image;
        }

        private Image drawCrossImage() {
            float size = 100;
            float margin = .1f * size;
            Canvas canvas = plat.graphics().createCanvas(size, size);
            canvas.setStrokeColor(0xff222222);
            canvas.setStrokeWidth(size / 20);
            canvas.drawLine(margin, margin, size - margin, size - margin);
            canvas.drawLine(size - margin, margin, margin, size - margin);
            return canvas.image;
        }
    }

    private static Layer createFieldLayer() {
        Layer l = Layers.solid(0xff555555, .9f, .9f).setOrigin(Layer.Origin.CENTER);
        return l;
    }

    interface PieceLayerProvider {
        Layer createLayer(BoardState.Block block);
    }
}
