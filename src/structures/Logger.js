/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

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
                chalk[types[this.type]](` ${chalk.gray(this.message)}`)
        )
    }
}

module.exports = Logger
