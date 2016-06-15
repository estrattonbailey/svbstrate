#!/usr/bin/env node
'use strict'

const fs = require('fs-extra')

const path = process.argv[2] || '.'

const FROM = `${ __dirname }/src`
const TO   = `${ process.cwd() }/${ path }`

fs.copy(FROM, TO, (error) => {
  if(error) return console.log(error)
  console.log('Svbstrate: copied source files.')
})

fs.copy('README.md', TO, (error) => {
  if(error) return console.log(error)
  console.log('Svbstrate: copied README file.')
})
