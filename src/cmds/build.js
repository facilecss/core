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
let userClock = moment().format('HH:mm:ss')

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
                `${chalk.cyanBright(`[${userClock}]`)} Found ${chalk.cyanBright(
                    files.length
                )} files to compile.`
            )
        )
    } else {
        console.log(
            chalk.gray(
                `${chalk.cyanBright(
                    `[${userClock}]`
                )} No files found in ${chalk.cyanBright(dir)}.`
            )
        )
        return
    }

    /*======== Get Classes In The Files ========*/
    let classes = []
    files.forEach((file) => {
        let filePath = path.join(dir, file)
        let fileContent = fs.readFileSync(filePath, 'utf8')
        let fileClasses = fileContent.match(/class="[^"]+"/g)
        if (fileClasses) {
            fileClasses.forEach((className) => {
                let classNameWithoutQuotes = className
                    .replace(/class="/, '')
                    .replace(/"/, '')
                classes.push(classNameWithoutQuotes)
            })
        }

        classes = classes
            .map((className) => {
                return className.split(' ')
            })
            .reduce((acc, curr) => {
                return acc.concat(curr)
            }, [])

        classes = classes.filter((className, index, self) => {
            return index === self.indexOf(className)
        })

        console.log(
            chalk.gray(
                `${chalk.cyanBright(`[${userClock}]`)} Found ${chalk.cyanBright(
                    classes.length
                )} classes to compile.`
            )
        )
    })
})
