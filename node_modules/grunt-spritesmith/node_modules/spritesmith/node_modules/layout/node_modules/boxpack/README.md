# Boxpack—Bin packing algorithm! [![Build Status](https://secure.travis-ci.org/munro/boxpack.png?branch=master)](http://travis-ci.org/munro/boxpack)

Bin packing algorithm!

## Example

```javascript
var bin = boxpack();

var boxes = bin.pack([
    {width: 50, height: 100},
    {width: 75, height: 75},
    {width: 25, height: 25},
    {width: 100, height: 100}
]);

document.getElementById('result').innerHTML = boxes.map(function (box) {
    return '<div style="' +
        'position:absolute;' +
        'border:1px solid black;' +
        'left:' + box.x + 'px;' +
        'top:' + box.y + 'px;' +
        /* subtract border from width & height */
        'width:' + (box.width - 2) + 'px;' +
        'height:' + (box.height - 2) + 'px"></div>';
}).join('');
```

## Data structures

### {Rect} `{width: {Number}, height: {Number}}`

Defines rectangles that we want to pack in a bin.

### {Box} `{x: {Number}, y: {Number}, width: {Number}, height: {Number}}`

Defines where a rectangle was packed in a bin.

## Bin methods

### var bin = boxpack({Object} options)

Creates a new bin for packing rects into.

### var result = bin.pack({width: 50, height: 100})

`result` will return `false` if there was no room left to pack the `Rect`.
Otherwise it will return `Box`

## Weighting algorithms

### boxpack.algo.dist

Sorts boxes based on their distance from (0, 0)

### boxpack.algo.top

Sorts boxes based on their distance from the X-axis

### boxpack.algo.left

Sorts boxes based on their distance from the Y-axis

## Helper functions

### boxpack.rectFit({Rect}, {Box}) -> {Boolean}
### boxpack.boxFit({Box}, {Box}) -> {Boolean}
### boxpack.intersect({Box}, {Box}) -> {Boolean}
### boxpack.divideX({Box}, {Number}) -> {Array {Box}}
### boxpack.divideY({Box}, {Number}) -> {Array {Box}}
### boxpack.subtract({Box}, {Box}) -> {Array {Box}}

## License

MIT
