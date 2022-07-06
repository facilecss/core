/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const config = require('../config')
const cssmin = require('cssmin')
const moment = require('moment')

const colors = {
    primary: '#ea4442',
    secondary: '#f5f5f5',
    error: '#d32752',
    info: '#00bcd4',
    teal: '#009688',
    blue: '#1919e6',
    red: '#e61919',
    yellow: '#e6e619',
    green: '#19e635',
    orange: '#ffa600',
    purple: '#9900ff',
    gray: '#808080',
    black: 'black',
    white: 'white',
}

classes = [
    {
        name: 'color',
        prefix: 'text',
        values: {
            primary: colors.primary,
            secondary: colors.secondary,
            error: colors.error,
            info: colors.info,
            teal: colors.teal,
            blue: colors.blue,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            orange: colors.orange,
            purple: colors.purple,
            gray: colors.gray,
            black: colors.black,
            white: colors.white,
        },
    },

    {
        name: 'background-color',
        prefix: 'bg',
        values: {
            primary: colors.primary,
            secondary: colors.secondary,
            error: colors.error,
            info: colors.info,
            teal: colors.teal,
            blue: colors.blue,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            orange: colors.orange,
            purple: colors.purple,
            gray: colors.gray,
            black: colors.black,
            white: colors.white,
        },
    },
]

function genarateClasses() {
    let time = Date.now()
    let userClock = moment().format('HH:mm:ss')

    let classs = ''
    classes.map((item) => {
        values = Object.keys(item.values)
            .map((key) => {
                return `.${item.prefix}-${key} {   ${item.name}: ${item.values[key]} }`
            })
            .join('\n')

        classs += `\n${values}\n`
    })

    console.log(
        chalk.gray(
            `${chalk.cyanBright(`[${userClock}]`)} ${chalk.hex(
                config.colors.pink
            )('✅ Build done in, ')} ${Date.now() - time}ms`
        )
    )

    return classs
}

let fileComment = fs.readFileSync('src/utils/fileComment.txt', 'utf8')

fs.writeFileSync(
    'src/css/colors.bundle.css',
    `${fileComment}${cssmin(genarateClasses())}`
)
