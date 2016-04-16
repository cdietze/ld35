package de.cdietze.quads.core;

import com.google.common.base.MoreObjects;
import pythagoras.i.Point;
import react.IntValue;
import react.RList;

import java.util.Objects;

public class BoardState {
    public static class Piece {
        public final IntValue fieldIndex;

        public Piece(int initialPos) {
            this.fieldIndex = new IntValue(initialPos);
        }

        @Override
        public String toString() {
            return MoreObjects.toStringHelper(this)
                    .add("fieldIndex", fieldIndex)
                    .toString();
        }
    }

    public final Level level;

    public final RList<Piece> pieces = RList.create();

    public final Piece playerPiece;

    public BoardState(Level level) {
        this.level = Objects.requireNonNull(level);
        playerPiece = new Piece(0);
        for (int pos = 1; pos < level.fieldCount; pos += 2) {
            pieces.add(new Piece(pos));
        }
    }

    public void tryMovePlayer(Direction dir) {
        Point point = PointUtils.toPoint(level.dim, playerPiece.fieldIndex.get());
        Point newPoint = point.add(dir.x(), dir.y());
        if (!level.rect.contains(newPoint)) return;
        playerPiece.fieldIndex.update(PointUtils.toIndex(level.dim, newPoint));
    }
}
