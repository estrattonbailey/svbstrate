'use strict';

var test = require('tap').test,
    boxpack = require('./');

function boxListSort(list) {
    return list.sort(function (a, b) {
        var sort = a.x - b.x;
        if (sort !== 0) {
            return sort;
        }
        return a.y - b.y;
    });
}

function boxListEq(t, a, b) {
    a = boxListSort(a);
    b = boxListSort(b);
    t.deepEqual(a, b, 'box lists are equal');
}

test('boxpack#rectFit', function (t) {
    t.ok(boxpack.rectFit(
        {width: 100, height: 70},
        {x: 300, y: 0, width: 338, height: Infinity}
    ));
    t.end();
});

test('boxpack#boxFit', function (t) {
    t.ok(boxpack.boxFit(
        {x: 310, y: 1337, width: 328, height: 31337},
        {x: 300, y: 0, width: 338, height: Infinity}
    ));
    t.notOk(boxpack.boxFit(
        {x: 310, y: 1337, width: 329, height: 31337},
        {x: 300, y: 0, width: 338, height: Infinity}
    ));
    t.end();
});

test('boxpack#module', function (t) {
    boxpack({width: 640, height: Infinity}).pack([
    ]);
    t.end();
});

test('boxpack#intersect', function (t) {
    t.notOk(boxpack.intersect(
        {x: 0, y: 0, width: 10, height: 10},
        {x: 10, y: 0, width: 10, height: 10}
    ));
    t.notOk(boxpack.intersect(
        {x: 0, y: 0, width: 10, height: 10},
        {x: 10, y: 0, width: 10, height: Infinity}
    ));
    t.ok(boxpack.intersect(
        {x: 0, y: 0, width: 10, height: 10},
        {x: 9, y: 0, width: 10, height: 10}
    ));
    t.ok(boxpack.intersect(
        {x: 0, y: 0, width: 10, height: 10},
        {x: 9, y: 0, width: 10, height: Infinity}
    ));
    t.end();
});

test('boxpack#divideX', function (t) {
    boxListEq(t, boxpack.divideX(
        {x: 5, y: 0, width: 10, height: 15},
        0
    ), [
    ]);
    boxListEq(t, boxpack.divideX(
        {x: 5, y: 0, width: 10, height: 15},
        10
    ), [
        {x: 5, y: 0, width: 5, height: 15},
        {x: 10, y: 0, width: 5, height: 15}
    ]);
    boxListEq(t, boxpack.divideX(
        {x: 5, y: 0, width: Infinity, height: 15},
        10
    ), [
        {x: 5, y: 0, width: 5, height: 15},
        {x: 10, y: 0, width: Infinity, height: 15}
    ]);
    t.end();
});

test('boxpack#divideY', function (t) {
    boxListEq(t, boxpack.divideY(
        {x: 5, y: 0, width: 10, height: 15},
        0
    ), [
    ]);
    boxListEq(t, boxpack.divideY(
        {x: 5, y: 0, width: 10, height: 15},
        10
    ), [
        {x: 5, y: 0, width: 10, height: 10},
        {x: 5, y: 10, width: 10, height: 5}
    ]);
    boxListEq(t, boxpack.divideY(
        {x: 5, y: 0, width: 10, height: Infinity},
        10
    ), [
        {x: 5, y: 0, width: 10, height: 10},
        {x: 5, y: 10, width: 10, height: Infinity}
    ]);
    t.end();
});

test('boxpack#subtract', function (t) {
    t.ok(boxpack.intersect(
        {x: 0, y: 5, width: 10, height: 5},
        {x: 5, y: 0, width: 10, height: 15}
    ));
    t.notOk(boxpack.intersect(
        {x: 0, y: 5, width: 10, height: 5},
        {x: 5, y: 0, width: 10, height: 5}
    ));
    t.notOk(boxpack.intersect(
        {x: 0, y: 5, width: 10, height: 5},
        {x: 10, y: 0, width: 5, height: 15}
    ));
    t.notOk(boxpack.intersect(
        {x: 0, y: 5, width: 10, height: 5},
        {x: 5, y: 10, width: 10, height: 5}
    ));
    boxListEq(t, boxpack.subtract(
        {x: 0, y: 5, width: 10, height: 5},
        {x: 5, y: 0, width: 10, height: 15}
    ), [
        {x: 5, y: 0, width: 10, height: 5},
        {x: 10, y: 0, width: 5, height: 15},
        {x: 5, y: 10, width: 10, height: 5}
    ]);
    t.end();
});

test('boxpack#pack', function (t) {
    var bin = boxpack();
    t.deepEqual(
        bin.pack({width: 100, height: 200}),
        {x: 0, y: 0, width: 100, height: 200}
    );
    t.deepEqual(
        bin.pack({width: 100, height: 200}),
        {x: 100, y: 0, width: 100, height: 200}
    );
    t.deepEqual(bin.pack([
        {width: 100, height: 200},
        {width: 100, height: 200}
    ]), [
        {x: 200, y: 0, width: 100, height: 200},
        {x: 0, y: 200, width: 100, height: 200}
    ]);
    t.end();
});