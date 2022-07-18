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

/*======== Config file ========*/
const configFile = path.join(process.cwd(), compiler.file)

if (!fs.existsSync(configFile)) {
    process.exit(1)
}

/*======== Get the html files ========*/
let userClock = moment().format('HH:mm:ss')

const config = require(configFile)

/*=====Watch Config=====*/
const files = config.settings.watch.files
const dir = config.settings.watch.dir
const log = config.settings.watch.log

/*=====Settings Config=====*/
const outDir = config.settings.outDir
const outFile = config.settings.outFile

/*=====Other Config=====*/
let time = Date.now()

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error(chalk.red(err))
        return
    }

    /*=====Start Logging=====*/

    new Logger('info', 'Starting build process...').log()

    if (log == true) {
        new Logger(
            'info',
            `Project name: ${chalk.hex(colors.primary)(config.projectName)}`
        ).log()

        new Logger(
            'info',
            `You are using facilecss version: ${chalk.hex(colors.primary)(
                config.version
            )} \n`
        ).log()
    }

    if (files.length > 0) {
        new Logger(
            'info',
            `Found ${chalk.cyanBright(files.length)} files to compile.`
        ).log()
    } else {
        new Logger('info', `No files found in ${chalk.cyanBright(dir)}.`).log()

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

        /*======== Split classes ========*/

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

        console.log()

        new Logger(
            'info',
            `${file} has ${chalk.cyanBright(classes.length)} classes.`
        ).log()

        /*======== Facile.min.css ========*/
        const cssFile = fs.readFileSync('./src/css/facile.bundle.css', 'utf8')

        /*======== Build Starts here ========*/

        console.log()

        try {
            setTimeout(() => {
                classes.forEach((className) => {
                    setTimeout(() => {
                        if (cssFile.includes(className)) {
                            if (log === true) {
                                new Logger(
                                    'info',
                                    `${chalk.cyanBright(className)} matched.`
                                ).log()
                            }

                            /*======== Write classes ========*/

                            let content = cssFile.match(
                                new RegExp(`.${className}\\s*{[^}]+}`, 'g')
                            )

                            fs.appendFileSync(
                                path.join(outDir, `${outFile}`),
                                `  ${content}  \n`,

                                (err) => {
                                    if (err) {
                                        new Logger(
                                            'error',
                                            `Error: ${chalk.cyanBright(err)}`
                                        ).log()
                                    }
                                }
                            )
                        }
                    }, 200)
                })
            }, 500)
        } catch (error) {
            new Logger('error', `Error: ${chalk.cyanBright(err)}`).log()
        }
    })

    setTimeout(() => {
        /*======== Build Done ========*/
        new Logger(
            'success',
            `✅ Build was done in ${chalk.cyanBright(Date.now() - time)}ms`
        ).log()
    }, 700)
})
