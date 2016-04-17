package de.cdietze.quads.core;

import com.google.common.collect.ImmutableList;

import java.util.List;

public final class Levels {
    private Levels() {}

    public static final Level learnToWalk = new Level.Builder()
            .title("Where am I?")
            .read("" +
                    ".......\n" +
                    "S.....G\n" +
                    ".......").build();

    public static final Level introButtonAndPusher = new Level.Builder()
            .title("A door, a button and a rock that looks like a circle?")
            .read("" +
                    ".P..aWW\n" +
                    "S...A.G\n" +
                    ".....WW").build();

    public static final Level introExpandosForButtons = new Level.Builder()
            .title("Why is it glowing?")
            .read("" +
                    "..a..WW\n" +
                    "S...A.G\n" +
                    "..XX.WW").build();

    public static final Level basicButtons = new Level.Builder()
            .title("Why am I asking so many questions?")
            .read("" +
                    "XX...a.\n" +
                    ".......\n" +
                    "......A\n" +
                    "aP.S.W.\n" +
                    ".....P.\n" +
                    ".....WW\n" +
                    ".....AG").build();

    public static final Level introPushMultiples = new Level.Builder()
            .title("Just like Popeye")
            .read("" +
                    "...S...\n" +
                    "PWWW...\n" +
                    "PWXW..X\n" +
                    ".W.WWWW\n" +
                    "...PPP.\n" +
                    ".WW....\n" +
                    ".W....G").build();

    public static final Level yummy = new Level.Builder()
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
            .title("This one reminds me of a game I played...")
            .read("" +
                    "XX.WWWW\n" +
                    "P..P.P.\n" +
                    ".WW....\n" +
                    "PW.PP..\n" +
                    "aa.S.WW\n" +
                    "aa...WG\n" +
                    "aa..A..").build();

    public static final List<Level> levels = ImmutableList.of(
            learnToWalk,
            introButtonAndPusher,
            introExpandosForButtons,
            basicButtons,
            introPushMultiples,
            yummy,
            level3);

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
