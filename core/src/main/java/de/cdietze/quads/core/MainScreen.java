package de.cdietze.quads.core;

import de.cdietze.playn_util.Screen;
import react.Slot;
import tripleplay.ui.Button;
import tripleplay.ui.Label;
import tripleplay.ui.Root;
import tripleplay.ui.SimpleStyles;
import tripleplay.ui.layout.AxisLayout;

public class MainScreen extends Screen {
    private final MainGame game;
    public MainScreen(MainGame game) {
        super(game);
        this.game = game;
    }

    @Override
    public void wasAdded() {
        super.wasAdded();
        Root root = iface.createRoot(AxisLayout.vertical(), SimpleStyles.newSheet(plat.graphics()), layer);
        root.setSize(plat.graphics().viewSize);

        root.add(new Label("William's Dilemma"));

        root.add(new Button("Start").onClick(new Slot<Button>() {
            @Override public void onEmit(Button event) {
                game.screens.push(new BoardScreen(game, Levels.level1));
            }
        }));
    }
}
