/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const minify = require('cssmin')
const { compiler } = require('../config')

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
const fileComment = fs.readFileSync('./src/utils/fileComment.txt', 'utf8')

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
                                new RegExp(className, 'g'),
                                `.${className}`
                            )

                            fs.appendFileSync(
                                path.join(outDir, `${outFile}`),
                                `.${className} { ${content} } \n`,

                                (err) => {
                                    if (err) {
                                        console.error(
                                            chalk.red('Error: ' + err)
                                        )
                                    }
                                }
                            )
                        }
                    }, 1000)
                })
            }, 2000)
        } catch (error) {
            console.error(chalk.red('Error: ' + error))
        }
    })
})
