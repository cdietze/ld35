package de.cdietze.quads.core;

import de.cdietze.playn_util.DialogKeeper;
import de.cdietze.playn_util.Screen;
import playn.core.Font;
import react.Slot;
import tripleplay.ui.*;
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
        Root root = iface.createRoot(AxisLayout.vertical(), UiUtils.newSheet(plat.graphics()), layer);
        root.setSize(plat.graphics().viewSize);

        root.add(new Label("William's Dilemma").addStyles(Style.FONT.is(new Font("Helvetica", Font.Style.BOLD, 48))));
        root.add(new Shim(1f, 50f));

        root.add(new Button("Start").onClick(new Slot<Button>() {
            @Override public void onEmit(Button event) {
                game.screens.push(new BoardScreen(game, Levels.level1));
            }
        }));

        root.add(new Button("Choose Level").onClick(new Slot<Button>() {
            @Override public void onEmit(Button event) {
                Group group = UiUtils.createDialogGroup(plat);
                final DialogKeeper.Dialog dialog = createDialog(AxisLayout.vertical(), UiUtils.newSheet(plat.graphics())).add(group).useShade().slideTopDown();
                for (int i = 0; i < Levels.levels.size(); i++) {
                    final Level level = Levels.levels.get(i);
                    group.add(new Button(Levels.fullTitle(level)).onClick(new Slot<Button>() {
                        @Override public void onEmit(Button event) {
                            game.screens.push(new BoardScreen(game, level));
                        }
                    }));
                }
                group.add(new Shim(1f, 20f), new Button("Close").onClick(dialog.dismissSlot()));
                closeOnHide(dialog.display());
            }
        }));
    }
}
