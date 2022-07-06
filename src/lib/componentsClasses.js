/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const config = require('../config')
const cssmin = require('cssmin')
const moment = require('moment')

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