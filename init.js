#! /usr/bin/env node
'use strict'

const fs = require('fs-extra')

/**
 * If no path is specified, build in
 * a new svbstrate/ directory
 */
const path = process.argv[2] || 'svbstrate' 

const FROM = `${ __dirname }/src`
const TO   = `${ process.cwd() }/${ path }`

/**
 * Copy main files
 */
fs.copy(FROM, TO, (error) => {
  if(error) return console.log('Main Error:',error)
  console.log('Svbstrate: copied source files.')
})

/**
 * Copy over main README.md
 */
fs.copy(`${__dirname}/README.md`, `${TO}/README.md`, (error) => {
  if(error) return console.log('README Error:',error)
  console.log('Svbstrate: copied README file.')
})
