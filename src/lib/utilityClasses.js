/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const config = require('../config')
const cssmin = require('cssmin')
const moment = require('moment')

/*======== Utility Classes starts here ========*/

const rootVar = {
    // spacing
    basePadding: '0.75',
    baseMargin: '0.75rem',

    // borders
    baseBoxShadow: '1px 3px 5px rgba(0, 0, 0, 0.1);',
}

const classes = [
    // fonts

    {
        name: 'font-size',
        prefix: 'font',
        values: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
        },
    },

    {
        name: 'font-family',
        prefix: 'font',
        values: {
            sans: 'sans-serif',
            serif: 'serif',
            mono: 'monospace',
            inherit: 'inherit',
        },
    },

    // spacing

    {
        name: 'padding',
        prefix: 'p',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'padding-left',
        prefix: 'pl',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'padding-right',
        prefix: 'pr',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'padding-top',
        prefix: 'pt',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'padding-bottom',
        prefix: 'pb',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'margin',
        prefix: 'm',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'margin',
        prefix: 'm',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'margin-left',
        prefix: 'ml',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'margin-right',
        prefix: 'mr',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'margin-bottom',
        prefix: 'mb',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    {
        name: 'margin-top',
        prefix: 'mt',
        values: {
            0: '0',
            1: rootVar.basePadding + 'rem',
            2: rootVar.basePadding * 2 + 'rem',
            3: rootVar.basePadding * 3 + 'rem',
            4: rootVar.basePadding * 4 + 'rem',
            5: rootVar.basePadding * 5 + 'rem',
            6: rootVar.basePadding * 6 + 'rem',
            7: rootVar.basePadding * 7 + 'rem',
            8: rootVar.basePadding * 8 + 'rem',
            9: rootVar.basePadding * 9 + 'rem',
            10: rootVar.basePadding * 10 + 'rem',
        },
    },

    // Shadows
    {
        name: 'box-shadow',
        prefix: 'bs',
        values: {
            none: 'none',
            xs: '1px 3px 5px rgba(0, 0, 0, 0.1);',
            sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
            md: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
            lg: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
            xl: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
            xxl: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)',
        },
    },

    {
        name: 'text-shadow',
        prefix: 'ts',
        values: {
            none: 'none',
            xs: '0 0 0.125rem rgba(0,0,0,0.25)',
            sm: '0 0 0.25rem rgba(0,0,0,0.25)',
            md: '0 0 0.375rem rgba(0,0,0,0.25)',
            lg: '0 0 0.5rem rgba(0,0,0,0.25)',
            xl: '0 0 0.75rem rgba(0,0,0,0.25)',
            xxl: '0 0 1rem rgba(0,0,0,0.25)',
        },
    },

    // Cursors
    {
        name: 'cursor',
        prefix: 'c',
        values: {
            default: 'default',
            pointer: 'pointer',
            text: 'text',
            wait: 'wait',
            move: 'move',
            'not-allowed': 'not-allowed',
            help: 'help',
            auto: 'auto',
            crosshair: 'crosshair',
            'no-drop': 'no-drop',
            none: 'none',
            'context-menu': 'context-menu',
            progress: 'progress',
            cell: 'cell',
            grab: 'grab',
            grabbing: 'grabbing',
            alias: 'alias',
            'all-scroll': 'all-scroll',
            'zoom-in': 'zoom-in',
            'zoom-out': 'zoom-out',
        },
    },

    // Height
    (function () {
        var height = {}
        for (var i = 0; i <= 35; i++) {
            height[i] = i + 'rem'
        }
        return {
            name: 'height',
            prefix: 'h',
            values: height,
        }
    })(),

    // display
    {
        name: 'display',
        prefix: 'd',
        values: {
            none: 'none',
            block: 'block',
            flex: 'flex',
            inline: 'inline',
            'inline-block': 'inline-block',
            'inline-flex': 'inline-flex',
        },
    },

    // Alignments
    {
        name: 'text-align',
        prefix: 'text',
        values: {
            left: 'left',
            center: 'center',
            right: 'right',
            justify: 'justify',
        },
    },

    {
        name: 'align-items',
        prefix: 'ai',
        values: {
            start: 'start',
            center: 'center',
            end: 'end',
            baseline: 'baseline',
            stretch: 'stretch',
        },
    },

    {
        name: 'justify-content',
        prefix: 'justify',
        values: {
            start: 'start',
            center: 'center',
            end: 'end',
            between: 'between',
            around: 'around',
            stretch: 'stretch',
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
                return `.${item.prefix}-${key} {   ${item.name}: ${item.values[key]}  }`
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
    'src/css/utilityClasses.bundle.css',
    `${fileComment}${cssmin(genarateClasses())}`
)
