package de.cdietze.quads.core;

import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Canvas;
import playn.core.Image;
import playn.scene.GroupLayer;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import playn.scene.Pointer;
import pythagoras.f.Vector;
import pythagoras.f.Vectors;
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
            initPiecesLayers();
        }

        private void initPiecesLayers() {
            final List<Layer> pieceLayers = new ArrayList<>();
            state.pieces.connectNotify(new RList.Listener<BoardState.Piece>() {
                @Override
                public void onAdd(final int index, final BoardState.Piece piece) {
                    final ImageLayer pieceLayer = createPieceLayer();
                    gridLayer.add(pieceLayer);
                    pieceLayers.add(index, pieceLayer);

                    piece.pos.connectNotify(new Slot<Integer>() {
                        @Override public void onEmit(Integer fieldIndex) {
                            int x = toX(level.dim, piece.pos.get());
                            int y = toY(level.dim, piece.pos.get());
                            pieceLayer.setTranslation(x, y);
                        }
                    });

                    SwipeListener swipeListener = new SwipeListener();
                    pieceLayer.events().connect(swipeListener);
                    swipeListener.completed.connect(new Slot<Direction>() {
                        @Override
                        public void onEmit(Direction dir) {
                            Point point = PointUtils.toPoint(level.dim, piece.pos.get());
                            Point newPoint = point.add(dir.x(), dir.y());
                            if (!level.rect.contains(newPoint)) return;
                            // TODO check collisions with other pieces etc.
                            piece.pos.update(PointUtils.toIndex(level.dim, newPoint));
                        }
                    });
                }

                @Override
                public void onRemove(int index, BoardState.Piece elem) {
                    pieceLayers.remove(index).close();
                }
            });
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

        private ImageLayer xImageLayer() {
            ImageLayer imageLayer = new ImageLayer(crossImage);
            imageLayer.setSize(.8f, .8f).setOrigin(Layer.Origin.CENTER);
            return imageLayer;
        }

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

    private static class SwipeListener extends Pointer.Listener {
        final float offAxisTolerance = 20f;
        final float onAxisThreshold = 20f;
        private playn.core.Pointer.Event startEvent;

        public Signal<Direction> completed = Signal.create();

        @Override
        public void onStart(Pointer.Interaction iact) {
            startEvent = iact.event;
            // gameState.explore(fieldIndex);
        }

        @Override
        public void onEnd(Pointer.Interaction iact) {
            Vector vec = Vectors.from(startEvent, iact.event);
            if (vec.x() > onAxisThreshold && Math.abs(vec.y()) < offAxisTolerance) {
                completed.emit(Direction.RIGHT);
            }
            if (vec.x() < -onAxisThreshold && Math.abs(vec.y()) < offAxisTolerance) {
                completed.emit(Direction.LEFT);
            }
            if (vec.y() < -onAxisThreshold && Math.abs(vec.x()) < offAxisTolerance) {
                completed.emit(Direction.UP);
            }
            if (vec.y() > onAxisThreshold && Math.abs(vec.x()) < offAxisTolerance) {
                completed.emit(Direction.DOWN);
            }
        }
    }
}
