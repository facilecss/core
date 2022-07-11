/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const moment = require('moment')

/*======== Config file ========*/
const configFile = path.join(process.cwd(), 'facile.config.js')

if (!fs.existsSync(configFile)) {
    process.exit(1)
}

/*======== Get the html files ========*/
const config = require(configFile)
const files = config.settings.watch.files
const dir = config.settings.watch.dir
const outDir = config.settings.outDir
const outFile = config.settings.outFile

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error(chalk.red(err))
        return
    }

    if (files.length > 0) {
        console.log(
            chalk.gray(
                `Found ${chalk.cyanBright(files.length)} files to compile.`
            )
        )
        console.log(chalk.green(`Compiling...`))
    }
})
