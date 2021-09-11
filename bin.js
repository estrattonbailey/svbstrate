#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const [command, directory] = process.argv.slice(2)

if (command !== 'init' || !directory) {
  console.log(`
    usage: svbstrate init path/to/directory/
  `)

  process.exit(0)
}

const dir = path.join(process.cwd(), directory)

fs.mkdirSync(dir, { recursive: true })

fs.writeFileSync(
  path.join(dir, 'svbstrate.css'),
  fs.readFileSync(path.join(__dirname, 'svbstrate.css'), 'utf-8'),
  'utf-8'
)

console.log(`\n  svbstrate copied to ${dir}\n`)
