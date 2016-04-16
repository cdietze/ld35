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

import static de.cdietze.quads.core.PointUtils.*;

public class BoardState {

    enum BlockType {
        PLAIN, EXPANDO;
    }

    public static abstract class Block {
        public final BlockType type;
        public final IntValue fieldIndex;

        public final RList<Integer> pieceOffsets = RList.create();
        public Block(BlockType type, int initialFieldIndex) {
            this.type = type;
            fieldIndex = new IntValue(initialFieldIndex);
            pieceOffsets.add(0);
        }

        public boolean canPlayerEnter(Direction dir) { return false; }
        public void beforePlayerEnters(Direction dir) {}
        public boolean removeTailOnPass() { return true; }

        @Override
        public String toString() {
            return MoreObjects.toStringHelper(this)
                    .add("type", type)
                    .add("fieldIndex", fieldIndex)
                    .toString();
        }
    }

    private class PlainBlock extends Block {
        public PlainBlock(int initialFieldIndex) {
            super(BlockType.PLAIN, initialFieldIndex);
        }
        @Override public boolean canPlayerEnter(Direction dir) {
            return canMoveBlock(this, dir, new HashSet<Block>());
        }
        @Override public void beforePlayerEnters(Direction dir) {
            int moveOffset = toIndex(level.dim, dir.x(), dir.y());
            moveBlock(this, moveOffset, new HashSet<Block>());
        }
    }

    private class ExpandoBlock extends Block {
        public ExpandoBlock(int initialFieldIndex) {
            super(BlockType.EXPANDO, initialFieldIndex);
        }
        @Override public boolean canPlayerEnter(Direction dir) { return true; }
        @Override public void beforePlayerEnters(Direction dir) {
            blocks.remove(this);
        }
        @Override public boolean removeTailOnPass() { return false; }
    }

    public final Level level;

    public final RList<Block> blocks = RList.create();

    public final IntValue playerHead;
    /**
     * The field indexes that make up the worm.
     * The order is its age. I.e., the last element is the next to be removed.
     */
    public final RList<Integer> playerTail = RList.create();

    public BoardState(Level level) {
        this.level = Objects.requireNonNull(level);

        playerHead = new IntValue(level.playerStart);

        for (int blockIndex : level.plainBlocks) {
            Block block = new PlainBlock(blockIndex);
            blocks.add(block);
        }

        blocks.add(new ExpandoBlock(0));
        blocks.add(new ExpandoBlock(4));
    }

    public void tryMovePlayer(Direction dir) {
        if (!canMovePlayer(dir)) return;
        movePlayer(dir);
    }

    private boolean canMovePlayer(Direction dir) {
        Point pos = toPoint(level.dim, playerHead.get()).addLocal(dir.x(), dir.y());
        if (!canMoveHere(pos)) return false;
        Optional<Block> target = blockAt(toIndex(level.dim, pos));
        if (target.isPresent()
                && !target.get().canPlayerEnter(dir)) {
            return false;
        }
        return true;
    }

    private void movePlayer(Direction dir) {
        int newHeadIndex = addDirToIndex(level.dim, playerHead.get(), dir);
        Optional<Block> target = blockAt(newHeadIndex);
        if (target.isPresent()) {
            target.get().beforePlayerEnters(dir);
        }
        boolean removed = playerTail.remove(Integer.valueOf(newHeadIndex));
        playerTail.add(0, playerHead.get());
        playerHead.update(newHeadIndex);

        if (!removed && (!target.isPresent() || (target.isPresent() && target.get().removeTailOnPass()))) {
            playerTail.remove(playerTail.size() - 1);
        }
    }

    private boolean canMoveBlock(Block block, Direction dir, Set<Block> checkedBlocks) {
        if (checkedBlocks.contains(block)) return true;
        // We haven't really checked ourselves but this avoids a potential infinite recursion
        checkedBlocks.add(block);
        for (int offset : block.pieceOffsets) {
            Point newPos = toPoint(level.dim, block.fieldIndex.get() + offset, tmp).addLocal(dir.x(), dir.y());
            if (!canMovePiece(newPos, dir, checkedBlocks)) return false;
        }
        return true;
    }

    private boolean canMovePiece(Point pos, Direction dir, Set<Block> checkedBlocks) {
        if (!canMoveHere(pos)) return false;
        Optional<Block> target = blockAt(toIndex(level.dim, pos));
        if (target.isPresent() && !canMoveBlock(target.get(), dir, checkedBlocks)) return false;
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

    private boolean canMoveHere(IPoint pos) {
        return level.rect.contains(pos);
    }

    private void moveBlock(Block block, int moveOffset, Set<Block> movedBlocks) {
        if (movedBlocks.contains(block)) return;
        // We only want to move once and avoid infinite recursion so add ourself immediately
        movedBlocks.add(block);
        // We move the other blocks before moving ourself to avoid overlaps
        for (int pieceOffset : block.pieceOffsets) {
            int newFieldIndex = block.fieldIndex.get() + pieceOffset + moveOffset;
            Optional<Block> target = blockAt(newFieldIndex);
            if (target.isPresent()) moveBlock(target.get(), moveOffset, movedBlocks);
        }
        block.fieldIndex.increment(moveOffset);
    }

    private Point tmp = new Point();
}
