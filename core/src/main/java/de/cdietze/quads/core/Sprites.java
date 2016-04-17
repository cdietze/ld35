package de.cdietze.quads.core;

import playn.core.Canvas;
import playn.core.Image;
import playn.core.Path;
import playn.core.Platform;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import tripleplay.util.Colors;

import java.util.Objects;

public class Sprites {
    private static final int IMAGE_SIZE = 100;
    private static final float DEFAULT_STROKE_WIDTH = .05f * IMAGE_SIZE;

    public final Platform plat;
    private final Images images;

    public Sprites(Platform plat) {
        this.plat = Objects.requireNonNull(plat);
        images = new Images();
    }

    public ImageLayer createEntityLayer() {
        ImageLayer imageLayer = new ImageLayer(images.circle);
        imageLayer.setSize(.8f, .8f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }
    public ImageLayer createHeadLayer() {
        ImageLayer imageLayer = new ImageLayer(images.head);
        imageLayer.setSize(.8f, .8f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }
    public ImageLayer createTailLayer() {
        ImageLayer imageLayer = new ImageLayer(images.tail);
        imageLayer.setSize(.8f, .8f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }
    public ImageLayer createPusherLayer() {
        ImageLayer imageLayer = new ImageLayer(images.pusher);
        imageLayer.setSize(.8f, .8f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }

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
        float size = IMAGE_SIZE;
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

    private Image drawHeadImage() {
        float size = IMAGE_SIZE;
        float radius = .4f * size;
        int headColor = 0xff00B30C;
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(headColor);
        canvas.fillCircle(.5f * size, .5f * size, radius);

        int eyeColor = 0xffffffff;
        float eyeRadius = .2f * size;
        float eyeX = .3f * size;
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
            float x = .2f * size; float y = .68f * size;
            float xOff = .1f * size; float yOff = .08f * size;
            canvas.setStrokeColor(Colors.BLACK).setStrokeWidth(DEFAULT_STROKE_WIDTH);
            canvas.strokePath(canvas.createPath().moveTo(x, y).bezierTo(x + xOff, y + yOff, size - x - xOff, y + yOff, size - x, y));
        }
        return canvas.image;
    }

    private Image drawTailImage() {
        float size = IMAGE_SIZE;
        float radius = .4f * size;
        int headColor = 0xff00B30C;
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(headColor);
        canvas.fillCircle(.5f * size, .5f * size, radius);
        return canvas.image;
    }

    private Image drawPusherImage() {
        float size = IMAGE_SIZE;
        float radius = .4f * size;
        int fillColor = 0xffB3A9A1;
        int borderColor = 0xffEBE1D9;
        Canvas canvas = plat.graphics().createCanvas(size, size);
        canvas.setFillColor(fillColor).fillCircle(.5f * size, .5f * size, radius);
        canvas.setStrokeColor(borderColor).setStrokeWidth(DEFAULT_STROKE_WIDTH).strokeCircle(.5f * size, .5f * size, radius);
        return canvas.image;
    }

    private final class Images {
        private Image circle = drawCircleImage();
        private Image head = drawHeadImage();
        private Image tail = drawTailImage();
        private Image pusher = drawPusherImage();
    }
}
