const postcss = require('postcss')

const output = process.env.NODE_ENV !== 'production' ? 'dist/svbstrate.css' : 'dist/svbstrate.min.css'
const plugins = process.env.NODE_ENV !== 'production' ? [
  'precss',
  'postcss-import',
  'postcss-custom-properties',
  'postcss-calc',
  'postcss-discard-comments',
  'autoprefixer',
  'postcss-reporter',
  'postcss-prettify',
] : [
  'precss',
  'postcss-import',
  'postcss-custom-properties',
  'postcss-calc',
  'postcss-discard-comments',
  'autoprefixer',
  'postcss-reporter',
  'cssnano',
]

module.exports = {
  use: plugins,
  input: 'src/main.css',
  output: output
}
