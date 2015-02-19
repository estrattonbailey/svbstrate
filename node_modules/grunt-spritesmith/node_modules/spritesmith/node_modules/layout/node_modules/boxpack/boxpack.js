/*jslint node: true, nomen: true */

'use strict';

/**
 * @typedef {Rect} {
 *     width: Number,
 *     height: Number
 * }
 */

/**
 * @typedef {Box} {
 *     x: [Number],
 *     y: [Number],
 *     width: [Number],
 *     height: [Number]
 * }
 */

/**
 * @param {Object} {
 *     {Number} width
 *     {Number} height
 *     {Boolean} no_xresize
 * }
 */
function boxpack(opts) {
    var self = Object.create(boxpack.prototype);
    opts = opts || {};
    // self._no_xresize = opts.no_xresize;
    self._packed = [];
    self._empty = [{
        x: 0,
        y: 0,
        width: opts.width || Infinity,
        height: opts.height || Infinity
    }];
    self.algo = opts.algo || boxpack.algo.dist;
    return self;
}

/**
 * Packing algorithm
 *   - Fit rect into empty box (sorted by volume)
 *   - Subtract new box from all intersecting boxes
 *     (optimize with btree?)
 *   - Check if any of the new subtracted boxes already
 *     are spoken for (optimize ... ?)
 */
boxpack.prototype = {
    _packOne: function (rect) {
        /*jslint vars: true */
        var self = this,
            pack = false;

        /* Find empty box to pack into */
        self._empty.some(function (fit) {
            if (boxpack.rectFit(rect, fit)) {
                pack = fit;
                return true;
            }
            return false;
        });

        /* Error: could not fit into bin */
        if (!pack) {
            return false;
        }

        /**
         * Pack new box.  Use the original object so that the programmer can
         * attach meta data to the boxes to reference later.
         */
        var box = Object.create(rect);
        box.x = pack.x;
        box.y = pack.y;
        /**
         * Have to bring the dimensions up the chain so that deep-equal can
         * assert that they're there.
         */
        box.width = rect.width;
        box.height = rect.height;
        self._packed.push(box);

        /* Subtract new box from all empty boxes */
        var new_empty = [];
        self._empty.forEach(function (fit) {
            if (!boxpack.intersect(box, fit)) {
                return new_empty.push(fit);
            }
            new_empty = new_empty.concat(boxpack.subtract(box, fit));
        });

        /**
         * Sort based on weighting algorithm.
         */
        var sorted = new_empty.sort(self.algo);

        this._empty = sorted.filter(function (a) {
            return sorted.every(function (b) {
                return a === b || !boxpack.boxFit(a, b);
            });
        });

        return box;
    },
    pack: function (rects) {
        var self = this;
        if (!(rects instanceof Array)) {
            return self._packOne(rects);
        }
        return rects.map(function (rect) {
            return self._packOne(rect) || rect;
        });
    }
};

/**
 * Creates a axis weighted algorithm
 * @param {String} fst Axis to weight first
 * @param {String} snd Axis to weight second
 * @return {Function} Algorithm
 */
function makeAxisAlgo(fst, snd) {
    return function (a, b) {
        var sort = a[fst] - b[fst];
        if (sort !== 0) {
            return sort;
        }
        return a[snd] - b[snd];
    };
}

boxpack.algo = {
    /**
     * Sorts boxes based on their distance from (0, 0)
     * @param {Box} a
     * @param {Box} b
     */
    dist: function (a, b) {
        return (
            (Math.pow(a.x, 2) + Math.pow(a.y, 2)) -
            (Math.pow(b.x, 2) + Math.pow(b.y, 2))
        );
    },
    /**
     * Sorts boxes based on their distance from the X-axis
     * @param {Box} a
     * @param {Box} b
     */
    top: makeAxisAlgo('y', 'x'),
    /**
     * Sorts boxes based on their distance from the Y-axis
     * @param {Box} a
     * @param {Box} b
     */
    left: makeAxisAlgo('x', 'y')
};

/**
 * Check if a rect fits inside a box.
 * @param {Rect} rect
 * @param {Box} fit
 * @return {Boolean}
 */
boxpack.rectFit = function (rect, bin) {
    return (
        rect.width <= bin.width &&
        rect.height <= bin.height
    );
};

/**
 * Check if a box fits inside another.
 * @param {Box} a
 * @param {Box} b
 * @return {Boolean}
 */
boxpack.boxFit = function (a, b) {
    return (
        a.x >= b.x && (a.x + a.width) <= (b.x + b.width) &&
        a.y >= b.y && (a.y + a.height) <= (b.y + b.height)
    );
};

/**
 * Checks if two boxes intersect.
 * @param {Box} a
 * @param {Box} b
 * @return {Boolean}
 */
boxpack.intersect = function (a, b) {
    return (
        a.x < (b.x + b.width) && (a.x + a.width) > b.x &&
        a.y < (b.y + b.height) && (a.y + a.height) > b.y
    );
};

/**
 * Split a box horizontally into two, otherwise return nothing.
 * @param {Box} box
 * @param {Number} x
 * @return {Array {Box}}
 */
boxpack.divideX = function (box, x) {
    if (x <= box.x || x >= (box.x + box.width)) {
        return [];
    }
    return [
        {x: box.x, y: box.y, width: (x - box.x), height: box.height},
        {x: x, y: box.y, width: (box.x + box.width - x), height: box.height}
    ];
};

/**
 * Split a box vertically into two, otherwise return nothing.
 * @param {Box} box
 * @param {Number} y
 * @return {Array {Box}}
 */
boxpack.divideY = function (box, y) {
    if (y <= box.y || y >= (box.y + box.height)) {
        return [];
    }
    return [
        {x: box.x, y: box.y, width: box.width, height: (y - box.y)},
        {x: box.x, y: y, width: box.width, height: (box.y + box.height - y)}
    ];
};

/**
 * Subtract two boxes, returning a list of boxes that make up the surrounding
 * space.
 * @param {Box} sub
 * @param {Box} from
 * @return {Array {Box}}
 */
boxpack.subtract = function (sub, from) {
    return [sub].concat(
        boxpack.divideX(from, sub.x),
        boxpack.divideX(from, sub.x + sub.width),
        boxpack.divideY(from, sub.y),
        boxpack.divideY(from, sub.y + sub.height)
    ).filter(function (box) {
        return !boxpack.intersect(sub, box);
    });
};

module.exports = boxpack;