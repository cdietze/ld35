package de.cdietze.quads.core;

import playn.core.Image;
import playn.core.Platform;
import playn.scene.ImageLayer;
import playn.scene.Pointer;
import playn.scene.SceneGame;
import tripleplay.game.ScreenStack;
import tripleplay.game.trans.SlideTransition;
import tripleplay.util.Logger;

public class MainGame extends SceneGame {
    static {
        Logger.levels.setDefault(Logger.Level.INFO);
    }

    public final ScreenStack screens = new ScreenStack(this, rootLayer) {
        @Override
        protected Transition defaultPushTransition() {
            return new SlideTransition(this).left();
        }

        @Override
        protected Transition defaultPopTransition() {
            return new SlideTransition(this).right();
        }
    };

    public MainGame(Platform plat) {
        super(plat, 33); // update our "simulation" 33ms (30 times per second)

        // create and add background image layer
        Image bgImage = plat.assets().getImage("images/clouds.png");
        ImageLayer bgLayer = new ImageLayer(bgImage);
        // scale the background to fill the screen
        bgLayer.setSize(plat.graphics().viewSize);
        rootLayer.add(bgLayer);

        // Register Pointer so we can handle any pointer input (clicks, mouse/touch events etc.)
        new Pointer(plat, rootLayer, true);

        screens.push(new MainScreen(this));
    }
}
