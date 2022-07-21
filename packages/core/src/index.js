/*
-----------------------------------------
Copyright (c) 2022, Facile CSS - https://www.facilecss.com
This file contains the code from Facile CSS open source project.
-----------------------------------------
*/

const fs = require('fs')
const path = require('path')
const child_process = require('child_process')
const chalk = require('chalk')
const Logger = require('./classes/Logger')

function getCSSFiles(dir) {
    return fs.readdirSync(dir).filter((file) => file.endsWith('.css'))
}

getCSSFiles(path.join(__dirname, './components')).forEach((file) => {
    const fileContents = fs.readFileSync(
        path.join(__dirname, './components', file),
        'utf8'
    )

    new Logger('info').log(`Processing ${file}`)
})
