/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const Logger = require('../structures/Logger')
const minify = require('cssmin')
const { compiler, colors } = require('../config')
const { getFiles, getClasses } = require('../utils/compiler')

const configFile = path.join(process.cwd(), compiler.file)

// If the user don't have a config file, then facile will exit the process
if (!fs.existsSync(configFile)) {
    process.exit(1)
}

// We are finding all the files in the watch directory
getFiles()
    .then((files) => {
        new Logger(
            'info',
            `Found ${chalk.hex(colors.orange)(
                files.length
            )} files to compile...`
        ).log()

        // We are finding all the classes in the files
        getClasses(files).then((classes) => {
            new Logger(
                'info',
                `Found ${chalk.hex(colors.orange)(
                    classes.length
                )} classes to compile...`
            ).log()

            console.log(classes)

            const pathTOBundleFile = fs.readdirSync('./src/css/')
            const bundleFile = pathTOBundleFile[0]
            const bundleFileContent = fs.readFileSync(
                `./src/css/${bundleFile}`,
                'utf8'
            )
        })
    })
    .catch((err) => {
        new Logger('error', `${chalk.red(err)}`).log()
    })
