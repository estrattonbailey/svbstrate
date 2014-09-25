# SVBSTRATE

## Basic starter templates for SUIT CSS inspired SASS projects.

### [Demo](http://svbstrate.io)

Only the necessities:
- SASS
- customizable inline-block grid
- typographical hierarchy
- FontAwesome
- 7 included stock images from one of my side projects, [Startup Stock Photos](http://startupstockphotos.com)

Plus two favorites:
- [Skrollr](https://github.com/Prinzhorn/skrollr) parallax library
- the super-neat [ScrollReveal](https://github.com/julianlloyd/scrollReveal.js) library

####SASS
It's the best. Be smart, use it for variables, calc(), etc, but keep the nesting and functions to a minimum. Ain't nobody got time for that.

Also, SVBSTRATE is mobile first. Use the separate ```*.scss``` files in ```~/partials/*``` for the different breakpoints. Yay minimal CSS.

Run ```sass --watch scss style.scss:style.css``` to compile from terminal.

####Inline Block Grid
Floats are silly. Inline-block based grids keep it simple and use easy to understand syntax. That's smart. Adjust settings in ```~/components/_grid--settings.scss```, including breakpoints.

* * *
And that's it. Think you can make it better? I'm sure you can. **Fork me.** I'd love to learn something new.

Created with love and curiosity by [@estrattonbailey](http://twitter.com/estrattonbailey).
