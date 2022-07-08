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

const classes = [
    {
        name: 'navbar',
        styles: `
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0.75rem 1.5rem;
        `,
    },

    {
        name: 'btn',
        styles: `
            text-decoration: none;
            cursor: pointer;
            display: inline-block;
            border: 0;
            padding: 0.75rem 1.5rem;
            border-radius: 3px;
            background-color: #e2e2e2;
            transition: color 0.2s ease-in-out;
        `,
    },

    // btn with all colors (default, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    (function () {
        colors.map((color) => {
            const value = Object.keys(color.shades).map((key) => {
                return {
                    name: `btn-${color.name}-${key}`,
                    styles: `
                        color: ${color.shades[key]};
                        text-decoration: none;
                        cursor: pointer;
                        display: inline-block;
                        border: 0;
                        padding: 0.75rem 1.5rem;
                        border-radius: 3px;
                        background-color: #e2e2e2;
                        transition: color 0.2s ease-in-out;
                        `,
                }

                return value
            })
        })
    })(),
]

function genarateClasses() {
    let time = Date.now()
    let userClock = moment().format('HH:mm:ss')

    let classs = ''
    classes.map((item) => {
        styles = item.styles
        classs += `.${item.name} {${styles}}\n`
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
    'src/css/components.bundle.css',
    `${fileComment}${cssmin(genarateClasses())}`
)
