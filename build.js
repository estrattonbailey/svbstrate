#! /usr/bin/env node
'use strict'

const fs = require('fs-extra')

/**
 * If no path is specified, build in
 * a new svbstrate/ directory
 */
const command = process.argv[2] || null 

const path = process.argv[3] || 'svbstrate' 
const FROM = `${ __dirname }/src`
const TO   = `${ process.cwd() }/${ path }`

const msg = {
  help: `
    When installed globally, svbstrate is available as an
    executable on the command line. E.g:
      
    svbstrate help
    
    It exposes a 'init' helper, in addition 'help', that should be
    followed by a path to the location you'd like to install svbstrate:
      
    svbstrate init path/to/css
    
    If no path is supplied to 'init', svbstrate will create a
    default directory of the same name, and install there.\n`,
  noargs: `
    Hey there! Looks like you want to use svbstrate.`,
  err: `
    Looks like you've used an incorrect command. Try 'help' or 'init <path>\n`
}

/**
 * No command, return default
 */
if (!command){ 
  console.log(msg.noargs)
  console.log(msg.help) 
  return 
}

if (command.match(/help/)) return console.log(msg.help) 

if (!command.match(/init/)) return console.log(msg.err)

/**
 * If a user get's past this point, 
 * they've at least provided 'init', 
 * and an optional path
 */

/**
 * Copy over main README.md
 */
fs.copy(`${__dirname}/README.md`, `${TO}/README.md`, (error) => {
  if(error) return console.log('README Error:',error)
  console.log(`\n   Copied README to ${TO}/README.md\n`)
})

/**
 * Copy main files
 */
fs.copy(FROM, TO, (error) => {
  if(error) return console.log('Main Error:',error)
  console.log(`   Copied files to ${TO}\n`)
})
