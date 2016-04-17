package de.cdietze.quads.core;

import com.google.common.collect.ImmutableList;

import java.util.List;

public final class Levels {
    private Levels() {}

    public static final Level level1 = new Level.Builder()
            .title("Where am I?")
            .read("" +
                    ".......\n" +
                    "S.....G\n" +
                    ".......").build();

    public static final Level level1_2 = new Level.Builder()
            .title("Where am I?")
            .read("" +
                    "XX...a.\n" +
                    ".......\n" +
                    ".....WA\n" +
                    "aP.S.W.\n" +
                    ".....P.\n" +
                    ".....WW\n" +
                    ".....AG").build();

    public static final Level level2 = new Level.Builder()
            .title("Yummy!")
            .read("" +
                    "a.....a\n" +
                    "WW...WW\n" +
                    "......a\n" +
                    "...SWWW\n" +
                    "AWXXXXX\n" +
                    ".WXXXXX\n" +
                    "GWXXXXX").build();

    public static final Level level3 = new Level.Builder()
            .title("This reminds me of a game I played...")
            .read("" +
                    "XX.WWWW\n" +
                    "P..P.P.\n" +
                    ".WW....\n" +
                    "PW.PP..\n" +
                    "aa.S.WW\n" +
                    "aa..WWG\n" +
                    "aa..A..").build();

    public static final List<Level> levels = ImmutableList.of(level1, level2, level3);

    public static String fullTitle(Level level) {
        int levelIndex = levels.indexOf(level);
        StringBuilder title = new StringBuilder();
        if (levelIndex >= 0) {
            title.append("Level " + (levelIndex + 1) + " - ");
        }
        title.append(level.title);
        return title.toString();
    }
}
