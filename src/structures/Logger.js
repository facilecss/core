const chalk = require('chalk')
const moment = require('moment')

let types = {
    info: 'cyan',
    success: 'green',
    warning: 'yellow',
    error: 'redBright',
}

class Logger {
    constructor(type, message) {
        this.type = type
        this.message = message
    }

    log() {
        let userClock = moment().format('HH:mm:ss')

        console.log(
            `[${chalk.cyanBright(userClock)}]` +
                chalk[types[this.type]](` ${this.message}`)
        )
    }
}

module.exports = Logger
