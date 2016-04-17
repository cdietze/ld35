package de.cdietze.quads.core;

import com.google.common.base.Function;
import com.google.common.base.Splitter;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Maps;
import com.google.common.collect.Range;
import pythagoras.i.Dimension;
import pythagoras.i.Rectangle;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static com.google.common.base.Preconditions.checkState;

public class Level {

    public static class DoorLink {
        public final List<Integer> doors;
        public final List<Integer> buttons;

        private DoorLink(Builder builder) {
            this.doors = ImmutableList.copyOf(builder.doors);
            this.buttons = ImmutableList.copyOf(builder.buttons);
        }

        public static class Builder {
            public final List<Integer> doors = new ArrayList<>();
            public final List<Integer> buttons = new ArrayList<>();
            public DoorLink build() { return new DoorLink(this); }
        }

        public static Function<Builder, DoorLink> builderFunction = new Function<Builder, DoorLink>() {
            @Override public DoorLink apply(Builder builder) { return builder.build(); }
        };
    }

    public final Dimension dim;
    public final Rectangle rect;
    public final String title;
    public final int fieldCount;
    public final int playerStart;
    public final int playerGoal;
    public final List<Integer> walls;
    public final List<Integer> pushEntity;
    public final List<Integer> expandoEntity;
    public final List<DoorLink> doorLinks;

    private Level(Builder builder) {
        dim = builder.dim.clone();
        rect = new Rectangle(dim);
        fieldCount = dim.width * dim.height;
        title = builder.title;
        playerStart = builder.playerStart;
        checkState(playerStart >= 0);
        playerGoal = builder.playerGoal;
        checkState(playerGoal >= 0);
        walls = ImmutableList.copyOf(builder.walls);
        pushEntity = ImmutableList.copyOf(builder.pushEntity);
        expandoEntity = ImmutableList.copyOf(builder.expandoEntity);
        doorLinks = ImmutableList.copyOf(Maps.transformValues(builder.doorLinks, DoorLink.builderFunction).values());
    }

    public static final class Builder {
        public Dimension dim;
        public String title;
        public int playerStart = -1;
        public int playerGoal = -1;
        public final List<Integer> walls = new ArrayList<>();
        public final List<Integer> pushEntity = new ArrayList<>();
        public final List<Integer> expandoEntity = new ArrayList<>();
        private final Map<Character, Level.DoorLink.Builder> doorLinks = Maps.newTreeMap();

        public Builder() {}

        public Builder dim(Dimension dim) {
            this.dim = dim.clone();
            return this;
        }
        public Builder title(String title) {
            this.title = title;
            return this;
        }
        public Builder playerStart(int val) {
            playerStart = val;
            return this;
        }
        public Builder playerGoal(int val) {
            playerGoal = val;
            return this;
        }
        public Level.DoorLink.Builder doorLink(char key) {
            if (!doorLinks.containsKey(key)) { doorLinks.put(key, new Level.DoorLink.Builder()); }
            return doorLinks.get(key);
        }

        public Level.Builder read(String s) {
            List<String> rows = Splitter.on('\n').splitToList(s);
            this.dim = new Dimension(rows.get(0).length(), rows.size());
            rows.get(0).length();
            for (int y = 0; y < rows.size(); y++) {
                String row = rows.get(y);
                for (int x = 0; x < row.length(); ++x) {
                    char c = row.charAt(x);
                    handleChar(c, PointUtils.toIndex(dim, x, y));
                }
            }
            return this;
        }

        private void handleChar(char c, int index) {
            Range<Character> doorRange = Range.closed('A', 'D');
            Range<Character> buttonRange = Range.closed('a', 'd');
            if (c == 'S') {
                playerStart(index);
            } else if (c == 'G') {
                playerGoal(index);
            } else if (c == 'W') {
                walls.add(index);
            } else if (c == 'P') {
                pushEntity.add(index);
            } else if (c == 'X') {
                expandoEntity.add(index);
            } else if (c == '.') {
            } else if (doorRange.contains(c)) {
                doorLink(c).doors.add(index);
            } else if (buttonRange.contains(c)) {
                doorLink(Character.toUpperCase(c)).buttons.add(index);
            } else
                throw new AssertionError("unknown char in level description: '" + c + "'");
        }

        public Level build() {return new Level(this);}
    }
}
