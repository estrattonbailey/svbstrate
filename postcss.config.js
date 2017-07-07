const p = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('cssnano')
  ]
}

