/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const moment = require('moment')
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
const fileComment = fs.readFileSync('./src/utils/fileComment.txt', 'utf8')

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error(chalk.red(err))
        return
    }

    /*=====Start Logging=====*/

    console.log(
        chalk.cyanBright(
            `[${userClock}] ${chalk.gray('Starting build process...')}`
        )
    )

    if (log == true) {
        console.log(
            `${chalk.cyanBright(`[${userClock}]`)} ${chalk.gray(
                'Project name:'
            )} ${chalk.hex(colors.primary)(config.projectName)}`
        )

        console.log(
            chalk.cyanBright(
                `[${userClock}] ${chalk.gray(
                    'You are using facilecss version:'
                )} ${chalk.hex(colors.primary)(config.version)} \n`
            )
        )
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

        console.log(
            chalk.gray(
                `${chalk.cyanBright(`[${userClock}]`)} Found ${chalk.cyanBright(
                    classes.length
                )} classes to compile.`
            )
        )

        /*======== Facile.min.css ========*/
        const cssFile = fs.readFileSync('./src/css/facile.bundle.css', 'utf8')

        /*======== Build Starts here ========*/

        try {
            setTimeout(() => {
                classes.forEach((className) => {
                    setTimeout(() => {
                        if (cssFile.includes(className)) {
                            if (log === true) {
                                console.log(
                                    chalk.gray(
                                        `${chalk.cyanBright(
                                            `[${userClock}]`
                                        )} Found ${chalk.cyanBright(
                                            className
                                        )} that matching facile classes.`
                                    )
                                )
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
                                        console.error(
                                            chalk.red('Error: ' + err)
                                        )
                                    }
                                }
                            )
                        }
                    }, 200)
                })
                console.log(
                    chalk.cyanBright(
                        `${chalk.cyanBright(`[${userClock}]`)} ${
                            chalk.greenBright('Build process finished. ') +
                            chalk.grey(`Done in ${Date.now() - time}ms.`)
                        }`
                    )
                )
            }, 500)
        } catch (error) {
            console.error(chalk.red('Error: ' + error))
        }
    })
})
