package de.cdietze.quads.core;

import com.google.common.base.Splitter;
import com.google.common.collect.ImmutableList;
import pythagoras.i.Dimension;
import pythagoras.i.Rectangle;

import java.util.ArrayList;
import java.util.List;

public class Level {
    public final Dimension dim;
    public final Rectangle rect;
    public final int fieldCount;
    public final int playerStart;
    //    public final List<Integer> blockers;
    public final List<Integer> plainBlocks;
    public final List<Integer> expandoBlocks;
    public final List<Integer> goals;

    private Level(Builder builder) {
        dim = builder.dim.clone();
        rect = new Rectangle(dim);
        fieldCount = dim.width * dim.height;
        playerStart = builder.playerStart;
        plainBlocks = ImmutableList.copyOf(builder.plainBlocks);
        expandoBlocks = ImmutableList.copyOf(builder.expandoBlocks);
        goals = ImmutableList.copyOf(builder.goals);
    }

    public static Level read(String s) {
        Builder builder = new Builder();
        List<String> rows = Splitter.on('\n').splitToList(s);
        Dimension dim = new Dimension(rows.get(0).length(), rows.size());
        rows.get(0).length();
        for (int y = 0; y < rows.size(); y++) {
            String row = rows.get(y);
            for (int x = 0; x < row.length(); ++x) {
                char c = row.charAt(x);
                handleChar(c, PointUtils.toIndex(dim, x, y), builder);
            }
        }

        builder.dim(dim);
        return builder.build();
    }

    private static void handleChar(char c, int index, Builder builder) {
        switch (c) {
            case 'H':
                builder.playerStart(index);
                break;
            case 'P':
                builder.plainBlocks.add(index);
                break;
            case 'p':
                builder.goals.add(index);
                break;
            case 'X':
                builder.expandoBlocks.add(index);
                break;
            case '.':
                break;
            default:
                throw new AssertionError("unknown char in level description: '" + c + "'");
        }
    }

    public static final class Builder {
        public Dimension dim;
        public int playerStart;
        public List<Integer> plainBlocks = new ArrayList<>();
        public List<Integer> expandoBlocks = new ArrayList<>();
        public List<Integer> goals = new ArrayList<>();

        public Builder() {}

        public Builder dim(Dimension dim) {
            this.dim = dim.clone();
            return this;
        }
        public Builder playerStart(int val) {
            playerStart = val;
            return this;
        }
        public Builder plainBlocks(List<Integer> val) {
            plainBlocks = val;
            return this;
        }
        public Builder goals(List<Integer> val) {
            goals = ImmutableList.copyOf(val);
            return this;
        }
        public Level build() {return new Level(this);}
    }
}
