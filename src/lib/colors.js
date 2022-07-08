/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const config = require('../config')
const cssmin = require('cssmin')
const moment = require('moment')
const { colors } = require('../colors')

function useColors() {
    let classs = ''
    colors.map((item) => {
        values = Object.keys(item.shades)
            .map((key) => {
                return `.${item.name}-${key} {   color: ${item.shades[key]} }`
            })
            .join('\n')

        classs += `\n${values}\n`
    })

    let fileComment = fs.readFileSync('src/utils/fileComment.txt', 'utf8')

    fs.writeFileSync(
        'src/css/colors.bundle.css',
        `${fileComment}${cssmin(classs)}`
    )

    return classs
}

useColors()
