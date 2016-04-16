package de.cdietze.quads.core;

import com.google.common.base.MoreObjects;
import com.google.common.base.Optional;
import pythagoras.i.IPoint;
import pythagoras.i.Point;
import react.IntValue;
import react.RList;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import static de.cdietze.quads.core.PointUtils.toIndex;
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
        playerBlock.pieceOffsets.add(1);
        playerBlock.pieceOffsets.add(6);
        Block block = new Block(BlockType.PLAIN, 8);
        block.pieceOffsets.add(6);
        blocks.add(block);
    }

    public void tryMovePlayer(Direction dir) {
        if (!canMovePlayer(dir)) return;
        movePlayer(toIndex(level.dim, dir.x(), dir.y()));
    }

    private boolean canMovePlayer(Direction dir) {
        return canMoveBlock(playerBlock, dir, new HashSet<Block>());
    }

    private boolean canMoveBlock(Block block, Direction dir, Set<Block> checkedBlocks) {
        if (checkedBlocks.contains(block)) return true;
        // We haven't really checked ourselves but this avoids a potential infinite recursion
        checkedBlocks.add(block);
        for (int offset : block.pieceOffsets) {
            Point newPos = toPoint(level.dim, block.fieldIndex.get() + offset, tmp).addLocal(dir.x(), dir.y());
            if (!canMoveBlockHere(newPos)) return false;
            Optional<Block> target = blockAt(toIndex(level.dim, newPos));
            if (target.isPresent() && !canMoveBlock(target.get(), dir, checkedBlocks)) return false;
        }
        return true;
    }

    private Optional<Block> blockAt(int fieldIndex) {
        for (Block block : blocks) {
            for (int offset : block.pieceOffsets) {
                if (block.fieldIndex.get() + offset == fieldIndex) return Optional.of(block);
            }
        }
        return Optional.absent();
    }

    private boolean canMoveBlockHere(IPoint pos) {
        return level.rect.contains(pos);
    }

    private void movePlayer(int moveOffset) {
        moveBlock(playerBlock, moveOffset, new HashSet<Block>());
    }

    private void moveBlock(Block block, int moveOffset, Set<Block> movedBlocks) {
        if (movedBlocks.contains(block)) return;
        block.fieldIndex.increment(moveOffset);
        movedBlocks.add(block);
        for (int offset : block.pieceOffsets) {
            int newFieldIndex = block.fieldIndex.get() + offset;
            Optional<Block> target = blockAt(newFieldIndex);
            if (target.isPresent()) moveBlock(target.get(), moveOffset, movedBlocks);
        }
    }

    private Point tmp = new Point();
}
