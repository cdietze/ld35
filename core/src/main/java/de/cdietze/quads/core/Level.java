package de.cdietze.quads.core;

import pythagoras.i.Dimension;
import pythagoras.i.Rectangle;

public class Level {
    public final Dimension dim = new Dimension(6, 6);
    public final Rectangle rect = new Rectangle(dim);
    public final int fieldCount = dim.width * dim.height;
}
