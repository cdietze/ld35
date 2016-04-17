package de.cdietze.quads.core;

import playn.core.Canvas;
import playn.core.Image;
import playn.core.Path;
import playn.core.Platform;
import playn.scene.ImageLayer;
import playn.scene.Layer;

import java.util.Objects;

public class Sprites {
    public final Platform plat;
    private final Images images;

    public Sprites(Platform plat) {
        this.plat = Objects.requireNonNull(plat);
        images = new Images();
    }

    public ImageLayer createEntityLayer() {
        ImageLayer imageLayer = new ImageLayer(images.circleImage);
        imageLayer.setSize(.8f, .8f).setOrigin(Layer.Origin.CENTER);
        return imageLayer;
    }

    public ImageLayer createPlayerLayer() {
        ImageLayer imageLayer = new ImageLayer(drawHeartImage());
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

    private final class Images {
        private Image circleImage = drawCircleImage();
        private Image crossImage = drawCrossImage();
    }
}
