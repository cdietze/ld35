package de.cdietze.quads.core;

import com.google.common.base.Function;
import com.google.common.base.MoreObjects;
import com.google.common.base.Optional;
import com.google.common.collect.Collections2;
import pythagoras.i.IPoint;
import pythagoras.i.Point;
import react.*;
import tripleplay.util.Logger;

import java.util.*;

import static de.cdietze.quads.core.PointUtils.*;

public class BoardState {
    public static final Logger log = new Logger("state");

    enum BlockType {
        PLAIN, EXPANDO, DOOR, BUTTON;
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

        public abstract boolean canPlayerEnter(Direction dir);
        public void beforePlayerEnters(Direction dir) { }
        public void afterPlayerLeft() { }
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
            super.beforePlayerEnters(dir);
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
            super.beforePlayerEnters(dir);
            blocks.remove(this);
        }
        @Override public boolean removeTailOnPass() { return false; }
    }

    public class DoorBlock extends Block {

        public final int doorLinkIndex;
        public final Value<Boolean> isOpen = Value.create(false);
        private final Value<Boolean> isPlayerCrossing = Value.create(false);

        public DoorBlock(int doorLinkIndex, int initialFieldIndex, Collection<ButtonBlock> buttons) {
            super(BlockType.DOOR, initialFieldIndex);
            this.doorLinkIndex = doorLinkIndex;
            ValueView<Boolean> allButtonsDown = Values.and(Collections2.transform(buttons, new Function<ButtonBlock, ValueView<Boolean>>() {
                @Override public ValueView<Boolean> apply(ButtonBlock buttonBlock) {
                    return buttonBlock.isDown;
                }
            }));
            Values.or(allButtonsDown, isPlayerCrossing).connectNotify(isOpen.slot());
        }
        @Override public boolean canPlayerEnter(Direction dir) { return isOpen.get(); }
        @Override public void beforePlayerEnters(Direction dir) {
            isPlayerCrossing.update(true);
        }
        @Override public void afterPlayerLeft() { isPlayerCrossing.update(false); }
    }

    public class ButtonBlock extends Block {

        public final int doorLinkIndex;
        public final Value<Boolean> isDown = Value.create(false);

        public ButtonBlock(int doorLinkIndex, int initialFieldIndex) {
            super(BlockType.BUTTON, initialFieldIndex);
            this.doorLinkIndex = doorLinkIndex;
        }
        @Override public boolean canPlayerEnter(Direction dir) { return true; }
        @Override public void beforePlayerEnters(Direction dir) { isDown.update(true); }
        @Override public void afterPlayerLeft() { isDown.update(false); }
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

        for (int fieldIndex : level.plainBlocks) {
            blocks.add(new PlainBlock(fieldIndex));
        }
        for (Integer fieldIndex : level.expandoBlocks) {
            blocks.add(new ExpandoBlock(fieldIndex));
        }

        for (int i = 0; i < level.doorLinks.size(); i++) {
            Level.DoorLink doorLink = level.doorLinks.get(i);
            List<ButtonBlock> buttons = new ArrayList<>();
            for (int fieldIndex : doorLink.buttons) {
                buttons.add(new ButtonBlock(i, fieldIndex));
            }
            blocks.addAll(buttons);
            for (int fieldIndex : doorLink.doors) {
                blocks.add(new DoorBlock(i, fieldIndex, buttons));
            }
        }
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
        boolean isFreshHead = !playerTail.contains(newHeadIndex);
        Optional<Block> target = blockAt(newHeadIndex);
        if (isFreshHead && target.isPresent()) {
            log.debug("beforePlayerEnters", "block", target.get());
            target.get().beforePlayerEnters(dir);
        }
        playerTail.remove(Integer.valueOf(newHeadIndex));
        playerTail.add(0, playerHead.get());
        playerHead.update(newHeadIndex);

        if (isFreshHead && (!target.isPresent() || (target.isPresent() && target.get().removeTailOnPass()))) {
            int removedFieldIndex = playerTail.remove(playerTail.size() - 1);
            Optional<Block> block = blockAt(removedFieldIndex);
            if (block.isPresent()) {
                log.debug("afterPlayerLeft", "block", block.get());
                block.get().afterPlayerLeft();
            }
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
