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
            background-color: #e2e2e2;
            text-decoration: none;
            cursor: pointer;
            display: inline-block;
            border: 0;
            padding: 0.75rem 1.5rem;
            border-radius: 3px;
            transition: color 0.2s ease-in-out;
        `,
    },

    // Forms

    {
        name: 'form-group',
        styles: `
            margin-bottom: 1rem;
        `,
    },

    // Form Label
    {
        name: 'form-group label',
        styles: `
            display: block;
            margin-bottom: 0.5rem;
        `,
    },

    // Form Control
    {
        name: 'form-control',
        styles: `
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        `,
    },
    // Focus State
    {
        name: 'form-control:focus',
        styles: `
            outline: 0;
            border-color: 0px;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        `,
    },

    // Form Control [Disabled, Placeholder, Readonly]

    {
        name: 'form-control:disabled',
        styles: `
            background-color: #e9ecef;
        `,
    },

    {
        name: 'form-control:placeholder',
        styles: `
            color: #ccc
        `,
    },

    {
        name: 'form-control:read-only',
        styles: `
            background-color: #e9ecef;
        `,
    },

    {
        name: 'form-valid:valid',
        styles: `
            border-color: #28a745;
        `,
    },

    {
        name: 'form-invalid:invalid',
        styles: `
            border-color: #dc3545;
        `,
    },

    ...colors.map((item) => {
        return {
            name: `btn-${item.name}`,
            styles: `
                background-color: ${item.shades.default};
                text-decoration: none;
                cursor: pointer;
                display: inline-block;
                border: 0;
                padding: 0.75rem 1.5rem;
                border-radius: 3px;
                transition: color 0.2s ease-in-out;
            `,
        }
    }),
]

function genarateClasses() {
    let time = Date.now()
    let userClock = moment().format('HH:mm:ss')

    let classs = ''
    classes.map((item) => {
        styles = item.styles
        classs += `.${item.name} {${styles}}`
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
