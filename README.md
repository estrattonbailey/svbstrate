# svbstrate [![npm](https://img.shields.io/npm/v/svbstrate.svg?maxAge=2592000)](https://www.npmjs.com/package/svbstrate)

### A simple, scalable CSS base layer. 
A low-level CSS library written in SCSS, inspired by [BASSCSS](http://www.basscss.com/) and [Tachyons](http://tachyons.io/). Includes a CLI for ease of use.

**Documentation (WIP):** [estrattonbailey.com/svbstrate-site](http://estrattonbailey.com/svbstrate-site/) 

## Getting Started 
Svbstrate is hosted on NPM, so simply install the package to your project and copy the files to your stylesheet directory.

1. Install from NPM.

  ```
  npm i svbstrate --save
  ```

2. Copy files from `node_modules/svbsrate/src` into your stylesheet directory.

**Alternatively,** you can install svbstrate as a global module, and make use of its CLI tool.

1. Install globally.

  ```
  npm i svbstrate -g
  ```

2. Init a new project, replacing `<path>` with the path to your desired stylesheets directory.

  ```
  svbstrate init <path>
  ```

## Contributing
Issues and Pull Requests are welcome. See [CONTRIBUTING.md](https://github.com/barrel/svbstrate/blob/master/CONTRIBUTING.md) for more info.

* * *

## About This Library
This libary is heavily influenced by [BASSCSS](http://www.basscss.com/) and [Tachyons](http://tachyons.io/) and in some cases could be considered a SCSS port of those libraries. Due credit and thanks to [@jxnblk](https://twitter.com/jxnblk_) and [@mrmrs\_](https://twitter.com/mrmrs_). If you have the flexibilty to go with POSTCSS, I would recommend BASSCSS 100%. That said, svbstrate does add a few of its own tricks. If (when) my work switches to POSTCSS, I'll be switching to BASSCSS as well and this library will likely be not maintained.

Basic documentation is [here](http://estrattonbailey.com/svbstrate-site/).

Questions, comments, suggestions? Open and issue or pull request, or reach me on Twitter at [@estrattonbailey](http://twitter.com/estrattonbailey).

* * *

MIT License
