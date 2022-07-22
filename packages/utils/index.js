/*
-----------------------------------------
Copyright (c) 2022, Facile CSS - https://www.facilecss.com
This file contains the code from Facile CSS open source project.
-----------------------------------------
*/

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

// Functions

function checkForContent(file) {
    // if there is already content in the file, delte the content
    if (fs.readFileSync(file, 'utf8').length > 0) {
        fs.writeFileSync(file, '')
    }
}

function getCSSFiles(dir) {
    return fs.readdirSync(dir).filter((file) => file.endsWith('.css'))
}

// Classes

// Logger
let types = {
    info: chalk.blue,
    warn: chalk.yellow,
    error: chalk.red,
}

class Logger {
    constructor(type) {
        this.type = type
    }

    log(message) {
        console.log(types[this.type](message))
    }
}

module.exports = {
    getCSSFiles: getCSSFiles,
    checkForContent: checkForContent,
    Logger: Logger,
}
