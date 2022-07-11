#!/usr/bin/env node

/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const config = require('./config')
const moment = require('moment')

/*======== Command Handler ========*/

process.argv.forEach((cmd) => {
    if (cmd === 'version') {
        require('./cmds/version')
    } else if (cmd == 'init') {
        require('./cmds/init')
    } else if (cmd == 'build') {
        require('./cmds/build')
    }
})
