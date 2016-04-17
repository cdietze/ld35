package de.cdietze.quads.core;

import playn.core.Platform;
import tripleplay.ui.Background;
import tripleplay.ui.Group;
import tripleplay.ui.SimpleStyles;
import tripleplay.ui.Style;
import tripleplay.ui.layout.AxisLayout;

public final class UiUtils {

    private UiUtils() {}

    public static Group createDialogGroup(Platform plat) {
        /** Use the colors from {@link SimpleStyles} */
        int bgColor = 0xFFCCCCCC, ulColor = 0xFFEEEEEE, brColor = 0xFFAAAAAA;
        return new Group(AxisLayout.vertical()).setStyles(Style.BACKGROUND.is(Background.roundRect(plat.graphics(), bgColor, 5, ulColor, 2).inset(20f)));
    }

}
