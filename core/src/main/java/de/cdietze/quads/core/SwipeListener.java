package de.cdietze.quads.core;

import playn.scene.Pointer;
import pythagoras.f.Vector;
import pythagoras.f.Vectors;
import react.Signal;

class SwipeListener extends Pointer.Listener {
    final float offAxisTolerance = 20f;
    final float onAxisThreshold = 20f;
    private playn.core.Pointer.Event startEvent;

    public Signal<Direction> completed = Signal.create();

    @Override
    public void onStart(Pointer.Interaction iact) {
        startEvent = iact.event;
        // gameState.explore(fieldIndex);
    }

    @Override
    public void onEnd(Pointer.Interaction iact) {
        Vector vec = Vectors.from(startEvent, iact.event);
        if (vec.x() > onAxisThreshold && Math.abs(vec.y()) < offAxisTolerance) {
            completed.emit(Direction.RIGHT);
        }
        if (vec.x() < -onAxisThreshold && Math.abs(vec.y()) < offAxisTolerance) {
            completed.emit(Direction.LEFT);
        }
        if (vec.y() < -onAxisThreshold && Math.abs(vec.x()) < offAxisTolerance) {
            completed.emit(Direction.UP);
        }
        if (vec.y() > onAxisThreshold && Math.abs(vec.x()) < offAxisTolerance) {
            completed.emit(Direction.DOWN);
        }
    }
}
