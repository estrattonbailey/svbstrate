# svbstrate [![npm](https://img.shields.io/npm/v/svbstrate.svg?maxAge=2592000)](https://www.npmjs.com/package/svbstrate)

Another functional CSS library. Itsy-bitsy classes. Fast and small and all that. Use it if you want. Includes a neat little CLI to copy the files.

## Features
1. No grid
2. No breakpoints
3. No colors
4. No reset/normalize\*
5. No opinions, other than what to leave out
6. **1.2kb gzipped**

This library doesn't include everything out of the box, because you probably don't need everything out of the box. Define your own grid, colors, and breakpoints, and build up from there using your preferred libraries or methods.

\*Ok ok, there are [two rules](https://github.com/estrattonbailey/svbstrate/blob/master/src/lib/reset.css).

## Usage
Copy the files from the repo, install to `node_modules`, or use the CLI. Up to you.
```
npm i svbstrate --save
```
To use the CLI, install globally.
```
npm i svbstrate -g

svbstrate init path/to/stylesheets/dir

# later, to update
npm i svbstrate@latest -g

# for help
svbstrate help
```
#### CDN
If you'd like, you can also use [unpkg](https://unpkg.com/#/):
```html
<link rel='stylesheet' href='https://unpkg.com/svbstrate' type='text/css'/>
```

## Philosophies
This has been covered again and again by people smarter than me. **Functional CSS is a smart way to define your stylesheets.**

With that out of the way, I encourage these things:

1. Use `em` units for everything
2. Don't create spacing classes over `2em`
3. Mobile first
4. Use utility classes as a *substrate* or baseline. Use custom classes for case-specific scenarios.

## Styles
### display
As ever, use appropriate tags for block-level or inline elements, etc. These are just a couple most commonly applied as overrides. Add more if you like.
```css
.block { display: block }
.inline-block { display: inline-block }
```

### positioning
Use the `.fill` and directional classes to quickly stick elements within their scope.
```css
.rel { position: relative }
.abs { position: absolute }
.fix { position: fixed }
.fill, .top { top: 0 }
.fill, .bottom { bottom: 0 }
.fill, .left { left: 0 }
.fill, .right { right: 0 }
.x { width: 100% }
.y { height: 100% }
```

### flexbox
Just about all you need to build any grid.
```css
.f { display: flex }
.fw { flex-wrap: wrap }
.ais { align-items: flex-start }
.aie { align-items: flex-end }
.aic { align-items: center }
.aib { align-items: baseline }
.jcs { justify-content: flex-start }
.jce { justify-content: flex-end }
.jcc { justify-content: center }
.jcb { justify-content: space-between }
.fa {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
}
```

### typography & scale
White-space should be defined by your type-scale via `em` units. The *scale* is therefore derived from the typographical hierarchy defined here. Also note a few useful utils.
```css
body {
  color: #000;
  font-family: Helvetica, sans-serif;
  font-size: 100%;
  line-height: 1.7;
  font-weight: 400;
  -webkit-font-smoothing: antialiased; 
}
.s1,
h1, .h1 {
  font-size: 4rem;
}
h1, .h1 { 
  line-height: 1.1;
}
.s2,
h2, .h2 { 
  font-size: 3rem;
}
h2, .h2 { 
  line-height: 1.3;
}
.s3,
h3, .h3 { 
  font-size: 2rem;
}
h3, .h3 { 
  line-height: 1.5;
}
.s4,
h4, .h4 { 
  font-size: 1.5rem;
}
h4, .h4 { 
  line-height: 1.5;
}
.s5,
h5, .h5 { 
  font-size: 1rem;
}
h5, .h5 { 
  line-height: 1.6;
}
.s6,
h6, .h6 { 
  font-size: 0.875rem;
}
h6, .h6 { 
  line-height: 1.6;
}
.s0,
p, .p { 
  font-size: 1rem;
}
p, .p { 
  line-height: 1.7;
}
p { 
  margin: 1em 0
}
a {
  color: inherit
}
hr {
  display: block;
  border: 0;
  margin: 0;
  height: 1px;
  width: 100%;
  background-color: currentColor;
  color: inherit;
}
small, .small {
  font-size: 0.75em;
}
strong, .b {
  font-weight: bold;
}
em, .i {
  font-style: italic;
}
.caps {
  text-transform: uppercase;
}
.no-under {
  text-decoration: none;
}
```

### spacing
Whitespace is important, but bike-shedding isn't worth it. Define relational spacing using small increments, and use custom classes and media queries to expand from there.

These all work the same way:
```
m    margin
ml    margin left
mr    margin right
my    margin y-axis
mx    margin x-axis

p    padding
pl    padding left
pr    padding right
py    padding y-axis
px    padding x-axis
```

The directional prefix is followed by a value. Preconfigured values: `0.25em` `0.5em` `0.75em` `1em`. I don't reccommend going beyond `1em` as your largest increment. Past that, I find there are many caveats and responsive changes that make larger increments unnecessary.

```css
.mxa, .ma { margin-left: auto }
.mxa, .ma { margin-right: auto }
.mya, .ma { margin-top: auto }
.mya, .ma { margin-bottom: auto; }

.mt0, .my0, .m0 { margin-top: 0 }
.mb0, .my0, .m0 { margin-bottom: 0 }

.mt025, .my025, .m025 { margin-top: 0.25em }
.mb025, .my025, .m025 { margin-bottom: 0.25em }
.ml025, .mx025, .m025 { margin-left: 0.25em }
.mr025, .mx025, .m025 { margin-right: 0.25em }
.pt025, .py025, .p025 { padding-top: 0.25em }
.pb025, .py025, .p025 { padding-bottom: 0.25em }
.pl025, .px025, .p025 { padding-left: 0.25em }
.pr025, .px025, .p025 { padding-right: 0.25em }

.mt05, .my05, .m05 { margin-top: 0.5em }
.mb05, .my05, .m05 { margin-bottom: 0.5em }
.ml05, .mx05, .m05 { margin-left: 0.5em }
.mr05, .mx05, .m05 { margin-right: 0.5em }
.pt05, .py05, .p05 { padding-top: 0.5em }
.pb05, .py05, .p05 { padding-bottom: 0.5em }
.pl05, .px05, .p05 { padding-left: 0.5em }
.pr05, .px05, .p05 { padding-right: 0.5em }

.mt075, .my075, .m075 { margin-top: 0.75em }
.mb075, .my075, .m075 { margin-bottom: 0.75em }
.ml075, .mx075, .m075 { margin-left: 0.75em }
.mr075, .mx075, .m075 { margin-right: 0.75em }
.pt075, .py075, .p075 { padding-top: 0.75em }
.pb075, .py075, .p075 { padding-bottom: 0.75em }
.pl075, .px075, .p075 { padding-left: 0.75em }
.pr075, .px075, .p075 { padding-right: 0.75em }

.mt1, .my1, .m1 { margin-top: 1em }
.mb1, .my1, .m1 { margin-bottom: 1em }
.ml1, .mx1, .m1 { margin-left: 1em }
.mr1, .mx1, .m1 { margin-right: 1em }
.pt1, .py1, .p1 { padding-top: 1em }
.pb1, .py1, .p1 { padding-bottom: 1em }
.pl1, .px1, .p1 { padding-left: 1em }
.pr1, .px1, .p1 { padding-right: 1em }
```

### alignment
```css
.al { text-align: left }
.ac { text-align: center }
.ar { text-align: right }
.aj { text-align: justify }
```

### buttons
Baseline to style your own buttons.
```css
button {
  border: 0;
  border-radius: 0;
  display: inline-block;
  cursor: pointer;
  -webkit-appearance: none;
}
button.button,
.button[role="button"],
input.button[type="submit"] {
  background-color: #000;
  color: white;
  padding: 0.5em 1.5em;
}
```

### forms
Baseline to style your own forms.
```css
form {
  margin: 0;
}
input,
textarea,
select {
  display: inline-block;
  outline: 0;
  border-radius: 0;
  border: 1px solid #000;
  position: relative;
  font-size: inherit;
  background-color: transparent;
}
textarea {
  max-width: 100%;
  overflow: auto;
  resize: vertical;
}
```

### lists
In order to encourage semantic HTML, list styles are disabled by default.
```css
ol, ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul.list,
ol.list {
  padding-left: 2em;
}
ol.list {
  list-style: decimal;
}
ul.list {
  list-style: disc;
}
```

### z-index
Manage stacking order without defining one-off classes.
```css
.z0 { z-index: 0 }
.z1 { z-index: 100 }
.z2 { z-index: 200 }
.z3 { z-index: 300 }
.z5 { z-index: 500 }
.z6 { z-index: 600 }
.z7 { z-index: 700 }
.z8 { z-index: 800 }
.z9 { z-index: 900 }
.z10 { z-index: 1000 }
```

## Prior Art
These guys (and others, but a lot is due to these two) brought functional CSS into everyday conversation. Inspired by them, I started this repo (my very first!) in September 2014 and continue to iterate and learn from it when I can. Yay CSS.
- [Tachyons](http://tachyons.io/) 
- [BASSCSS](http://www.basscss.com/)

MIT License
