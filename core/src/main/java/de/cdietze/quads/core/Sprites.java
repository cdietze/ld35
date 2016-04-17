package de.cdietze.quads.core;

import de.cdietze.playn_util.Screen;
import playn.core.Canvas;
import playn.core.Image;
import playn.core.Path;
import playn.core.Platform;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import tripleplay.util.Colors;

public class Sprites {
    private static final int IMAGE_SIZE = 100;
    private static final float DEFAULT_STROKE_WIDTH = .05f * IMAGE_SIZE;
    private final Screen screen;

    public interface Cols {
        int PLAYER_BODY = 0xff00B30C;
    }

    public final Platform plat;
    private final Images images;

    public Sprites(Screen screen) {
        this.screen = screen;
        this.plat = screen.plat;
        images = new Images();
    }

    public ImageLayer createHeadLayer() {
        ImageLayer imageLayer = new ImageLayer(images.head);
        imageLayer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }
    public ImageLayer createTailLayer() {
        ImageLayer imageLayer = new ImageLayer(images.tail);
        imageLayer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }
    public ImageLayer createPusherLayer() {
        ImageLayer imageLayer = new ImageLayer(images.pusher);
        imageLayer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }
    public ImageLayer createButtonLayer() {
        ImageLayer imageLayer = new ImageLayer(images.button);
        imageLayer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }
    public ImageLayer createDoorLayer() {
        ImageLayer imageLayer = new ImageLayer(images.door);
        imageLayer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }
    public ImageLayer createExpandoLayer() {
        ImageLayer imageLayer = new ImageLayer(images.expando);
        imageLayer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        screen.iface.anim.repeat(imageLayer).tweenAlpha(imageLayer).to(.5f).in(1000f).then().tweenAlpha(imageLayer).to(1f).in(1000f);
        return imageLayer;
    }
    public ImageLayer createGoalLayer() {
        ImageLayer imageLayer = new ImageLayer(images.goal);
        imageLayer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }

    private Image drawHeadImage() {
        float size = IMAGE_SIZE;
        float radius = .4f * size;
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(Cols.PLAYER_BODY);
        canvas.fillCircle(.5f * size, .5f * size, radius);

        int eyeColor = 0xffffffff;
        float eyeRadius = .15f * size;
        float eyeX = .35f * size;
        float eyeY = .4f * size;
        canvas.setFillColor(eyeColor);
        canvas.fillCircle(eyeX, eyeY, eyeRadius);
        canvas.fillCircle(size - eyeX, eyeY, eyeRadius);

        float pupilRadius = .05f * size;
        canvas.setFillColor(Colors.BLACK);
        canvas.fillCircle(eyeX, eyeY, pupilRadius);
        canvas.fillCircle(size - eyeX, eyeY, pupilRadius);

        {
            // Draw Mouth
            float x = .25f * size; float y = .68f * size;
            float xOff = .1f * size; float yOff = .08f * size;
            canvas.setStrokeColor(Colors.BLACK).setStrokeWidth(DEFAULT_STROKE_WIDTH);
            canvas.strokePath(canvas.createPath().moveTo(x, y).bezierTo(x + xOff, y + yOff, size - x - xOff, y + yOff, size - x, y));
        }
        return canvas.image;
    }

    private Image drawTailImage() {
        float size = IMAGE_SIZE;
        float radius = .35f * size;
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(Cols.PLAYER_BODY);
        canvas.fillCircle(.5f * size, .5f * size, radius);
        return canvas.image;
    }

    private Image drawPusherImage() {
        float size = IMAGE_SIZE;
        float width = .7f * size;
        float height = .7f * size;
        float x = .5f * (size - width);
        float y = .5f * (size - height);
        int fillColor = 0xff5F5F66;
        int borderColor = Colors.darker(fillColor);
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(fillColor).fillRoundRect(x, y, width, height, 10f);
        canvas.setStrokeColor(borderColor).setStrokeWidth(DEFAULT_STROKE_WIDTH).strokeRoundRect(x, y, width, height, 10f);
        return canvas.image;
    }

    private Image drawButtonImage() {
        float size = IMAGE_SIZE;
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setStrokeWidth(DEFAULT_STROKE_WIDTH);
        canvas.save().translate(0, .3f * size).setFillColor(Colors.BLACK);
        canvas.setStrokeColor(Colors.BLACK);
        drawSingleButton(canvas, size);
        canvas.restore().save().translate(0f, .2f * size).setFillColor(Colors.WHITE);
        canvas.setStrokeColor(Colors.darker(Colors.WHITE));
        drawSingleButton(canvas, size);
        return canvas.image;
    }

    private Canvas drawSingleButton(Canvas canvas, float size) {
        float width = .9f * size;
        float height = .4f * size;
        float x = .5f * (size - width);
        float y = .5f * (size - height);
        canvas.fillRoundRect(x, y, width, height, .1f * size);
        return canvas.strokeRoundRect(x, y, width, height, .1f * size);
    }

    private Image drawDoorImage() {
        float size = IMAGE_SIZE;
        float width = .9f * size;
        float height = .8f * size;
        float x = .5f * (size - width);
        float y = .5f * (size - height);
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(Colors.WHITE);
        canvas.setStrokeWidth(DEFAULT_STROKE_WIDTH);
        canvas.setStrokeColor(Colors.darker(Colors.WHITE));
        canvas.fillRoundRect(x, y, width, size, .2f * size);
        canvas.strokeRoundRect(x, y, width, size, .2f * size);
        return canvas.image;
    }

    private Image drawExpandoImage() {
        float size = IMAGE_SIZE;
        float radius = .35f * size;
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(Cols.PLAYER_BODY);
        canvas.fillCircle(.5f * size, .5f * size, radius);

        float lineMargin = .4f * size;
        canvas.setStrokeWidth(.1f * size);
        canvas.setLineCap(Canvas.LineCap.SQUARE);
        canvas.setStrokeColor(Colors.brighter(Cols.PLAYER_BODY));
        canvas.drawLine(lineMargin, .5f * size, size - lineMargin, .5f * size);
        canvas.drawLine(.5f * size, lineMargin, .5f * size, size - lineMargin);
        return canvas.image;
    }

    private Image drawGoalImage() {
        float size = IMAGE_SIZE;
        float width = .9f * size;
        float height = .4f * size;
        float x = .5f * (size - width);
        float y = .5f * (size - height) + .25f * size;
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(Colors.BLACK);
        canvas.fillRoundRect(x, y, width, height, .25f * size);
        return canvas.image;
    }

    private final class Images {
        private Image head = drawHeadImage();
        private Image tail = drawTailImage();
        private Image pusher = drawPusherImage();
        private Image button = drawButtonImage();
        private Image door = drawDoorImage();
        private Image expando = drawExpandoImage();
        private Image goal = drawGoalImage();
    }
}
