package de.cdietze.quads.core;

import com.google.common.base.Predicate;
import com.google.common.collect.ComparisonChain;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Ordering;
import pythagoras.i.IDimension;
import pythagoras.i.IPoint;
import pythagoras.i.Point;

import java.util.BitSet;
import java.util.List;
import java.util.Random;

public final class PointUtils {

    private PointUtils() {
    }

    public static final Ordering<IPoint> defaultOrdering = new Ordering<IPoint>() {
        @Override
        public int compare(IPoint left, IPoint right) {
            return ComparisonChain.start().compare(left.y(), right.y()).compare(left.x(), right.x()).result();
        }
    };

    public static int toX(IDimension dim, int index) {
        return index % dim.width();
    }

    public static int toY(IDimension dim, int index) {
        return index / dim.width();
    }

    public static int toIndex(IDimension dim, int x, int y) {
        return x + y * dim.width();
    }

    public static int toIndex(IDimension dim, IPoint p) {
        return toIndex(dim, p.x(), p.y());
    }

    public static Point toPoint(IDimension dim, int index) {
        return new Point(index % dim.width(), index / dim.width());
    }

    public static boolean contains(IDimension dim, int index) {
        return contains(dim, toX(dim, index), toY(dim, index));
    }

    public static boolean contains(IDimension dim, int x, int y) {
        return x >= 0 && x < dim.width() && y >= 0 && y < dim.height();
    }

    public static boolean contains(IDimension dim, IPoint p) {
        return p.x() >= 0 && p.x() < dim.width() && p.y() >= 0 && p.y() < dim.height();
    }

    /**
     * @return a list of the orthogonal neighbors of p that are inside {@code dim}.
     */
    public static List<Integer> neighbors(IDimension dim, IPoint p) {
        ImmutableList.Builder<Integer> builder = ImmutableList.builder();
        if (p.x() > 0) builder.add(toIndex(dim, p.x() - 1, p.y()));
        if (p.y() > 0) builder.add(toIndex(dim, p.x(), p.y() - 1));
        if (p.x() < dim.width() - 1) builder.add(toIndex(dim, p.x() + 1, p.y()));
        if (p.y() < dim.height() - 1) builder.add(toIndex(dim, p.x(), p.y() + 1));
        return builder.build();
    }

    /**
     * @return a list of the orthogonal neighbors of p that are inside {@code dim}.
     */
    public static List<Point> neighborPoints(IDimension dim, IPoint p) {
        ImmutableList.Builder<Point> builder = ImmutableList.builder();
        if (p.x() > 0) builder.add(new Point(p.x() - 1, p.y()));
        if (p.y() > 0) builder.add(new Point(p.x(), p.y() - 1));
        if (p.x() < dim.width() - 1) builder.add(new Point(p.x() + 1, p.y()));
        if (p.y() < dim.height() - 1) builder.add(new Point(p.x(), p.y() + 1));
        return builder.build();
    }

    public static BitSet neighbors(IDimension dim, int index, BitSet result) {
        int x = toX(dim, index);
        int y = toY(dim, index);
        if (x > 0) result.set(toIndex(dim, x - 1, y));
        if (y > 0) result.set(toIndex(dim, x, y - 1));
        if (x < dim.width() - 1) result.set(toIndex(dim, x + 1, y));
        if (y < dim.height() - 1) result.set(toIndex(dim, x, y + 1));
        return result;
    }

    /**
     * @return a BitSet with all orthogonal neighbors of index that are inside {@code dim}.
     */
    public static BitSet neighbors(IDimension dim, int index) {
        return neighbors(dim, index, new BitSet());
    }


    public static int randomIndex(Random random, IDimension dim) {
        return random.nextInt(dim.width() * dim.height());
    }

    public static Point randomPoint(Random random, IDimension dim, Point result) {
        return result.set(random.nextInt(dim.width()), random.nextInt(dim.height()));
    }

    public static Point randomPoint(Random random, IDimension dim) {
        return randomPoint(random, dim, new Point());
    }

    /**
     * Expand orthogonally on all fields in set. Only adds fields where the predicate is true.
     *
     * @return the connected area as a BitSet
     */
    public static BitSet expand(IDimension dim, BitSet set, Predicate<Integer> predicate) {
        BitSet connectedFields = new BitSet();
        connectedFields.or(set);
        BitSet openFields = new BitSet();
        openFields.or(connectedFields);
        while (!openFields.isEmpty()) {
            int field = openFields.nextSetBit(0);
            openFields.set(field, false);
            BitSet neighbors = neighbors(dim, field);
            for (int neighbor = neighbors.nextSetBit(0); neighbor >= 0; neighbor = neighbors.nextSetBit(neighbor + 1)) {
                if (connectedFields.get(neighbor)) continue;
                if (predicate.apply(neighbor)) {
                    connectedFields.set(neighbor);
                    openFields.set(neighbor);
                }
            }
        }
        return connectedFields;
    }
}
