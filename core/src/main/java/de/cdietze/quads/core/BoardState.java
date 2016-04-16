package de.cdietze.quads.core;

import react.IntValue;
import react.RList;

import java.util.Objects;

public class BoardState {
    public final Level level;

    public final RList<Piece> pieces = RList.create();

    public BoardState(Level level) {
        this.level = Objects.requireNonNull(level);
        for (int pos = 0; pos < level.fieldCount; ++pos) {
            pieces.add(new Piece(pos));
        }
    }

    public static class Piece {
        public final IntValue pos;

        public Piece(int initialPos) {
            this.pos = new IntValue(initialPos);
        }
    }
}
