package de.cdietze.quads.core;

import com.google.common.base.MoreObjects;
import pythagoras.i.Point;
import react.IntValue;
import react.RList;

import java.util.Objects;

import static de.cdietze.quads.core.PointUtils.toPoint;

public class BoardState {

    enum BlockType {
        PLAYER, PLAIN;
    }

    public static class Block {
        public final BlockType type;
        public final IntValue fieldIndex;
        public final RList<Integer> pieceOffsets = RList.create();
        public Block(BlockType type, int initialFieldIdex) {
            this.type = type;
            fieldIndex = new IntValue(initialFieldIdex);
            pieceOffsets.add(0);
        }

        @Override
        public String toString() {
            return MoreObjects.toStringHelper(this)
                    .add("fieldIndex", fieldIndex)
                    .toString();
        }
    }

    public final Level level;

    public final RList<Block> blocks = RList.create();

    public final Block playerBlock;

    public BoardState(Level level) {
        this.level = Objects.requireNonNull(level);
        playerBlock = new Block(BlockType.PLAYER, 0);
        for (int pos = 1; pos < level.fieldCount; pos += 2) {
            Block block = new Block(BlockType.PLAIN, pos);
            blocks.add(block);
            if (pos % 3 == 0) {
                block.pieceOffsets.add(1);
            }
        }
    }

    public void tryMovePlayer(Direction dir) {
        for (int offset : playerBlock.pieceOffsets) {
            Point newPos = toPoint(level.dim, playerBlock.fieldIndex.get() + offset, tmp).addLocal(dir.x(), dir.y());
            if (!level.rect.contains(newPos)) return;
        }
        playerBlock.fieldIndex.update(PointUtils.toIndex(level.dim, toPoint(level.dim, playerBlock.fieldIndex.get(), tmp).addLocal(dir.x(), dir.y())));
    }

    private Point tmp = new Point();
}
