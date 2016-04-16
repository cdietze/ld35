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
import pythagoras.i.Point;
import react.*;
import tripleplay.ui.*;
import tripleplay.ui.layout.AxisLayout;
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

        root.add(boardElement.setConstraint(BorderLayout.CENTER));

        Group sideBar = new Group(AxisLayout.vertical());

        sideBar.add(new ToggleButton("Toggle"));
        final IntValue counter = new IntValue(0);
        sideBar.add(new Button("Temporarily Increment Counter").onClick(new UnitSlot() {
            @Override
            public void onEmit() {
                updateAnim.increment(counter, 1).then().delay(1000f).then().increment(counter, -1);
            }
        }));
        sideBar.add(new Label(counter.map(new Function<Integer, String>() {
            @Override
            public String apply(Integer input) {
                return "Counter: " + input;
            }
        })));
        root.add(sideBar.setConstraint(BorderLayout.WEST));
    }

    private final class Board {
        public final GroupLayer rootLayer = new GroupLayer();
        private final GroupLayer gridLayer = new GroupLayer();
        private final Level level = new Level();

        private final List<Layer> fieldLayers;

        public Board() {
            rootLayer.setSize(level.dim.width(), level.dim.height()).setOrigin(Layer.Origin.CENTER);
            rootLayer.addAt(gridLayer, .5f, .5f);
            Layer backgroundLayer = Layers.solid(0xAA000000, rootLayer.width(), rootLayer.height());
            rootLayer.add(backgroundLayer.setDepth(-1f));
            fieldLayers = createFieldLayers();
            initPlayerLayer();
            initPiecesLayers();
        }

        private void initPlayerLayer() {
            Layer playerLayer = createBlockLayer(state.playerBlock, pieceLayerProvider);
            playerLayer.setTint(0xffff0000);
            gridLayer.add(playerLayer);
            plat.input().keyboardEvents.connect(new Keyboard.KeySlot() {

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
            });
        }

        private Layer createBlockLayer(final BoardState.Block block, final PieceLayerProvider pieceLayerProvider) {
            final GroupLayer group = new GroupLayer();
            final List<Layer> layers = new ArrayList<>();
            block.pieceOffsets.connectNotify(new RList.Listener<Integer>() {
                @Override public void onAdd(int index, Integer offset) {
                    int x = toX(level.dim, offset);
                    int y = toY(level.dim, offset);
                    Layer layer = pieceLayerProvider.createLayer(block, offset);
                    group.addAt(layer, x, y);
                    layers.add(index, layer);
                }
                @Override public void onRemove(int index, Integer offset) {
                    layers.remove(index).close();
                }
            });
            block.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(group));
            return group;
        }

        private void initPiecesLayers() {
            final List<Layer> pieceLayers = new ArrayList<>();
            state.blocks.connectNotify(new RList.Listener<BoardState.Block>() {
                @Override
                public void onAdd(final int index, final BoardState.Block block) {
                    final Layer pieceLayer = createBlockLayer(block, pieceLayerProvider);
                    gridLayer.add(pieceLayer);
                    pieceLayers.add(index, pieceLayer);

                    block.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(pieceLayer));

                    SwipeListener swipeListener = new SwipeListener();
                    pieceLayer.events().connect(swipeListener);
                    swipeListener.completed.connect(new Slot<Direction>() {
                        @Override
                        public void onEmit(Direction dir) {
                            Point point = PointUtils.toPoint(level.dim, block.fieldIndex.get());
                            Point newPoint = point.add(dir.x(), dir.y());
                            if (!level.rect.contains(newPoint)) return;
                            // TODO check collisions with other blocks etc.
                            block.fieldIndex.update(PointUtils.toIndex(level.dim, newPoint));
                        }
                    });
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
                final int index = fieldIndex;
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
            @Override public Layer createLayer(BoardState.Block block, int offset) {
                switch (block.type) {
                    case PLAYER:
                        return createPlayerLayer();
                    case PLAIN:
                        return createPieceLayer();
                    default:
                        throw new AssertionError();
                }
            }
        };

        private Image circleImage = drawCircleImage();
        private Image crossImage = drawCrossImage();

        private Image drawCircleImage() {
            float size = 100;
            float radius = .45f * size;
            Canvas canvas = plat.graphics().createCanvas(size, size);
            canvas.setStrokeColor(0xff222222);
            canvas.setStrokeWidth(size / 20);
            canvas.strokeCircle(size / 2, size / 2, radius);
            return canvas.image;
        }

        private Image drawHeartImage() {
            float size = 100;
            float radius = .2f * size;
            float margin = .1f * size;
            Canvas canvas = plat.graphics().createCanvas(size, size);
            canvas.setFillColor(0xffbb2222);
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
        Layer createLayer(BoardState.Block block, int offset);
    }

}
