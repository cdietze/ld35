package de.cdietze.quads.core;

import com.google.common.base.Function;
import com.google.common.base.MoreObjects;
import com.google.common.base.Optional;
import com.google.common.collect.Collections2;
import pythagoras.i.IPoint;
import pythagoras.i.Point;
import react.*;
import tripleplay.util.Logger;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

import static de.cdietze.quads.core.PointUtils.*;

public class BoardState {
    public static final Logger log = new Logger("state");

    public static abstract class Entity {
        enum Type {
            PLAYER, WALL, PUSHER, EXPANDO, DOOR, BUTTON;
        }

        public final Type type;
        public final IntValue fieldIndex;

        public Entity(Type type, int initialFieldIndex) {
            this.type = type;
            fieldIndex = new IntValue(initialFieldIndex);
        }

        public boolean canEnter(Entity entity, Direction dir) { return false; }
        public boolean removePlayerTailOnEnter() { return true; }
        public void beforeEntityEnters(Entity entity, Direction dir) {
            log.debug("beforeEntityEnters", "this", this, "entity", entity);
        }
        public void afterEntityLeft(Entity entity) {
            log.debug("afterEntityLeft", "this", this, "entity", entity);
        }

        @Override
        public String toString() {
            return MoreObjects.toStringHelper(this)
                    .add("type", type)
                    .add("fieldIndex", fieldIndex)
                    .toString();
        }
    }

    public class PlayerEntity extends Entity {
        public PlayerEntity(int fieldIndex) {
            super(Type.PLAYER, fieldIndex);
        }
        /**
         * The field indexes that make up the worm.
         * The order is its age. I.e., the last element is the next to be removed.
         */
        public final RList<Integer> tail = RList.create();
    }

    public class WallEntity extends Entity {
        public WallEntity(int fieldIndex) { super(Type.WALL, fieldIndex); }
        @Override public boolean canEnter(Entity e, Direction dir) { return false; }
    }

    private class PusherEntity extends Entity {
        public PusherEntity(int initialFieldIndex) {
            super(Type.PUSHER, initialFieldIndex);
        }
        @Override public boolean canEnter(Entity e, Direction dir) {
            Point targetPos = toPoint(level.dim, fieldIndex.get(), tmp).addLocal(dir.x(), dir.y());
            if (!canMoveHere(targetPos)) return false;
            Optional<Entity> targetEntity = entityAt(toIndex(level.dim, targetPos));
            if (targetEntity.isPresent() && !targetEntity.get().canEnter(this, dir)) return false;
            return true;
        }
        @Override public void beforeEntityEnters(Entity e, Direction dir) {
            super.beforeEntityEnters(e, dir);
            int moveOffset = toIndex(level.dim, dir.x(), dir.y());
            // We move the other entities before moving ourself to avoid overlaps
            int targetFieldIndex = fieldIndex.get() + moveOffset;
            Optional<Entity> targetEntity = entityAt(targetFieldIndex);
            if (targetEntity.isPresent()) targetEntity.get().beforeEntityEnters(this, dir);
            fieldIndex.increment(moveOffset);
        }
    }

    private class ExpandoEntity extends Entity {
        public ExpandoEntity(int initialFieldIndex) {
            super(Type.EXPANDO, initialFieldIndex);
        }
        @Override public boolean canEnter(Entity e, Direction dir) { return true; }
        @Override public void beforeEntityEnters(Entity e, Direction dir) {
            super.beforeEntityEnters(e, dir);
            entities.remove(this);
        }
        @Override public boolean removePlayerTailOnEnter() { return false; }
    }

    public class DoorEntity extends Entity {

        public final int doorLinkIndex;
        public final Value<Boolean> isOpen = Value.create(false);
        private final Value<Boolean> isPlayerCrossing = Value.create(false);

        public DoorEntity(int doorLinkIndex, int initialFieldIndex, Collection<ButtonEntity> buttons) {
            super(Type.DOOR, initialFieldIndex);
            this.doorLinkIndex = doorLinkIndex;
            ValueView<Boolean> allButtonsDown = Values.and(Collections2.transform(buttons, new Function<ButtonEntity, ValueView<Boolean>>() {
                @Override public ValueView<Boolean> apply(ButtonEntity buttonEntity) {
                    return buttonEntity.isDown;
                }
            }));
            Values.or(allButtonsDown, isPlayerCrossing).connectNotify(isOpen.slot());
        }
        @Override public boolean canEnter(Entity e, Direction dir) { return isOpen.get(); }
        @Override public void beforeEntityEnters(Entity e, Direction dir) {
            super.beforeEntityEnters(e, dir);
            isPlayerCrossing.update(true);
        }
        @Override public void afterEntityLeft(Entity e) {
            super.afterEntityLeft(e);
            isPlayerCrossing.update(false);
        }
    }

    public class ButtonEntity extends Entity {

        public final int doorLinkIndex;
        public final Value<Boolean> isDown = Value.create(false);

        public ButtonEntity(int doorLinkIndex, int initialFieldIndex) {
            super(Type.BUTTON, initialFieldIndex);
            this.doorLinkIndex = doorLinkIndex;
        }
        @Override public boolean canEnter(Entity e, Direction dir) { return true; }
        @Override public void beforeEntityEnters(Entity e, Direction dir) {
            super.beforeEntityEnters(e, dir);
            isDown.update(true);
        }
        @Override public void afterEntityLeft(Entity e) {
            super.afterEntityLeft(e);
            isDown.update(false);
        }
    }

    public final Level level;

    public final RList<Entity> entities = RList.create();

    public final PlayerEntity playerEntity;

    public BoardState(Level level) {
        this.level = Objects.requireNonNull(level);

        playerEntity = new PlayerEntity(level.playerStart);

        for (int fieldIndex : level.walls) {
            entities.add(new WallEntity(fieldIndex));
        }

        for (int fieldIndex : level.pushEntity) {
            entities.add(new PusherEntity(fieldIndex));
        }
        for (Integer fieldIndex : level.expandoEntity) {
            entities.add(new ExpandoEntity(fieldIndex));
        }

        for (int i = 0; i < level.doorLinks.size(); i++) {
            Level.DoorLink doorLink = level.doorLinks.get(i);
            List<ButtonEntity> buttons = new ArrayList<>();
            for (int fieldIndex : doorLink.buttons) {
                buttons.add(new ButtonEntity(i, fieldIndex));
            }
            entities.addAll(buttons);
            for (int fieldIndex : doorLink.doors) {
                entities.add(new DoorEntity(i, fieldIndex, buttons));
            }
        }
    }

    public void tryMovePlayer(Direction dir) {
        if (!canMovePlayer(dir)) return;
        movePlayer(dir);
    }

    private boolean canMovePlayer(Direction dir) {
        Point pos = toPoint(level.dim, playerEntity.fieldIndex.get()).addLocal(dir.x(), dir.y());
        if (!canMoveHere(pos)) return false;
        Optional<Entity> target = entityAt(toIndex(level.dim, pos));
        if (target.isPresent()
                && !target.get().canEnter(playerEntity, dir)) {
            return false;
        }
        return true;
    }

    private void movePlayer(Direction dir) {
        int targetHeadIndex = addDirToIndex(level.dim, playerEntity.fieldIndex.get(), dir);
        boolean isFreshHead = !playerEntity.tail.contains(targetHeadIndex);
        Optional<Entity> targetEntity = entityAt(targetHeadIndex);
        if (isFreshHead && targetEntity.isPresent()) {
            targetEntity.get().beforeEntityEnters(playerEntity, dir);
        }
        playerEntity.tail.remove(Integer.valueOf(targetHeadIndex));
        playerEntity.tail.add(0, playerEntity.fieldIndex.get());
        playerEntity.fieldIndex.update(targetHeadIndex);

        if (isFreshHead && (!targetEntity.isPresent() || (targetEntity.isPresent() && targetEntity.get().removePlayerTailOnEnter()))) {
            int removedFieldIndex = playerEntity.tail.remove(playerEntity.tail.size() - 1);
            Optional<Entity> entity = entityAt(removedFieldIndex);
            if (entity.isPresent()) {
                entity.get().afterEntityLeft(playerEntity);
            }
        }
    }

    private Optional<Entity> entityAt(int fieldIndex) {
        for (Entity entity : entities) {
            if (entity.fieldIndex.get() == fieldIndex) return Optional.of(entity);
        }
        return Optional.absent();
    }

    private boolean canMoveHere(IPoint pos) {
        return level.rect.contains(pos);
    }

    private void moveEntity(Entity entity, int moveOffset) {
        // We move the other entities before moving ourself to avoid overlaps
        int targetFieldIndex = entity.fieldIndex.get() + moveOffset;
        Optional<Entity> targetEntity = entityAt(targetFieldIndex);
        if (targetEntity.isPresent()) moveEntity(targetEntity.get(), moveOffset);
        entity.fieldIndex.increment(moveOffset);
    }

    private Point tmp = new Point();
}
