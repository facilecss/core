const chalk = require('chalk')

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

module.exports = Logger
