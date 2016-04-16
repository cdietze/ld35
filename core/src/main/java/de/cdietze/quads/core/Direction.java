package de.cdietze.quads.core;

import pythagoras.i.IPoint;
import pythagoras.i.Point;

public enum Direction {
    UP {
        private final Point dir = new Point(0, -1);
        @Override public IPoint dir() { return dir; }
    }, DOWN {
        private final Point dir = new Point(0, 1);
        @Override public IPoint dir() { return dir; }
    }, LEFT {
        private final Point dir = new Point(-1, 0);
        @Override public IPoint dir() { return dir; }
    }, RIGHT {
        private final Point dir = new Point(1, 0);
        @Override public IPoint dir() { return dir; }
    };

    protected abstract IPoint dir();
    public int x() { return dir().x(); }
    public int y() { return dir().y(); }
}