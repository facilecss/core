const chalk = require('chalk')
const moment = require('moment')

let types = {
    info: 'cyanBright',
    success: 'greenBright',
    warning: 'yellowBright',
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
            `${chalk.cyanBright('[' + userClock + ']')}` +
                chalk[types[this.type]](` ${this.message}`)
        )
    }
}

module.exports = Logger
