package de.cdietze.quads.core;

import com.google.common.collect.ImmutableList;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Canvas;
import playn.core.Image;
import playn.core.Surface;
import playn.scene.GroupLayer;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import pythagoras.f.Dimension;
import react.Function;
import react.IntValue;
import react.RList;
import react.UnitSlot;
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
        ScaledElement boardElement = new ScaledElement(board.layer);

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
        public final GroupLayer layer = new GroupLayer();
        private final Level level = new Level();

        private final List<Layer> fieldLayers;

        public Board() {
            layer.setSize(level.dim.width(), level.dim.height()).setOrigin(Layer.Origin.CENTER);
            Layer backgroundLayer = Layers.solid(0xAA000000, level.dim.width(), level.dim.height());
            layer.add(backgroundLayer.setDepth(-1f));
            fieldLayers = createFieldLayers();

            final List<Layer> pieceLayers = new ArrayList<>();
            state.pieces.connectNotify(new RList.Listener<BoardState.Piece>() {
                @Override
                public void onAdd(int index, BoardState.Piece piece) {
                    ImageLayer pieceLayer = createPieceLayer();
                    int x = toX(level.dim, piece.pos.get());
                    int y = toY(level.dim, piece.pos.get());
                    layer.addAt(pieceLayer, x, y);
                    pieceLayers.add(index, pieceLayer);
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
                Layer fieldLayer = BoardScreen.createFieldLayer().setOrigin(Layer.Origin.CENTER);
                int x = toX(level.dim, fieldIndex);
                int y = toY(level.dim, fieldIndex);
                layer.addAt(fieldLayer, x, y);
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
        final Dimension size = new Dimension(1, 1);
        final int bgColor = 0xff555555;
        final int borderColor = 0xff000000;
        final float thickness = 0.05f;
        return new Layer() {
            @Override
            protected void paintImpl(Surface surf) {
                float width = size.width(), height = size.height();
                surf.setFillColor(bgColor).fillRect(0, 0, width, height);
                surf.setFillColor(borderColor).
                        fillRect(0, 0, width, thickness).
                        fillRect(0, 0, thickness, height).
                        fillRect(width - thickness, 0, thickness, height).
                        fillRect(0, height - thickness, width, thickness);
            }
        };
    }
}
