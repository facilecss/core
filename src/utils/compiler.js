/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const fs = require('fs')
const path = require('path')
const Logger = require('../structures/Logger')
const chalk = require('chalk')
const { compiler, colors } = require('../config')

const configFile = path.join(process.cwd(), compiler.file)
const config = require(configFile)
const dir = config.settings.watch.dir
const log = config.settings.watch.log

module.exports.getFiles = function () {
    return new Promise((resolve, reject) => {
        fs.readdir(dir || './', (err, files) => {
            if (err) {
                reject(err)
            }

            resolve(files)
        })
    })
}

module.exports.getClasses = function (files) {
    return new Promise((resolve, reject) => {
        let classes = []

        files.forEach((file) => {
            let filePath = path.join(dir, file)
            let fileContent = fs.readFileSync(filePath, 'utf8')
            let fileClasses = fileContent.match(/\.\w+/g)

            if (fileClasses) {
                classes = classes.concat(fileClasses)
            }
        })

        resolve(classes)
    })
}
