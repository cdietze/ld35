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
        PLAIN, EXPANDO;
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
            Block block = new Block(BlockType.PLAIN, blockIndex);
            blocks.add(block);
        }

        blocks.add(new Block(BlockType.EXPANDO, 0));
    }

    public void tryMovePlayer(Direction dir) {
        if (!canMovePlayer(dir)) return;
        movePlayer(dir);
    }

    private boolean canMovePlayer(Direction dir) {
        Point pos = toPoint(level.dim, playerHead.get()).addLocal(dir.x(), dir.y());
        return canMovePiece(pos, dir, new HashSet<Block>());
    }

    private void movePlayer(Direction dir) {
        Point newHeadPos = toPoint(level.dim, playerHead.get()).addLocal(dir.x(), dir.y());
        int newHeadFieldIndex = PointUtils.toIndex(level.dim, newHeadPos);
        boolean removed = playerTail.remove(Integer.valueOf(newHeadFieldIndex));
        playerTail.add(0, playerHead.get());
        playerHead.update(newHeadFieldIndex);
        if (!removed) playerTail.remove(playerTail.size() - 1);
        movePiece(newHeadPos, dir, new HashSet<Block>());
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

    private void movePiece(Point pos, Direction dir, Set<Block> movedBlocks) {
        Optional<Block> target = blockAt(toIndex(level.dim, pos));
        if (target.isPresent()) moveBlock(target.get(), toIndex(level.dim, dir.x(), dir.y()), movedBlocks);
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
