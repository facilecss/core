/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require("chalk");
const fs = require("fs");
const config = require("../config");
const cssmin = require("cssmin");
const moment = require("moment");

/*======== Utility Classes starts here ========*/

const rootVar = {
    // spacing
    basePadding: "0.75",
    baseMargin: "0.75rem",

    // borders
};

const classes = [
    {
        name: "font-size",
        prefix: "font",
        values: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1.125rem",
            lg: "1.25rem",
            xl: "1.5rem",
        },
    },

    {
        name: "font-family",
        prefix: "font-s",
        values: {
            sans: "sans-serif",
            serif: "serif",
            mono: "monospace",
            inherit: "inherit",
        },
    },

    // spacing

    {
        name: "padding",
        prefix: "p",
        values: {
            0: "0",
            1: rootVar.basePadding + "rem",
            2: rootVar.basePadding * 2 + "rem",
            3: rootVar.basePadding * 3 + "rem",
            4: rootVar.basePadding * 4 + "rem",
            5: rootVar.basePadding * 5 + "rem",
            6: rootVar.basePadding * 6 + "rem",
            7: rootVar.basePadding * 7 + "rem",
            8: rootVar.basePadding * 8 + "rem",
            9: rootVar.basePadding * 9 + "rem",
            10: rootVar.basePadding * 10 + "rem",
        },
    },
];

function genarateClasses() {
    let time = Date.now();
    let userClock = moment().format("HH:mm:ss");

    let classs = "";
    classes.map((item) => {
        values = Object.keys(item.values)
            .map((key) => {
                return `.${item.prefix}-${key} {   ${item.name}: ${item.values[key]} };`;
            })
            .join("\n");

        classs += `\n${values}\n`;
    });

    console.log(
        chalk.gray(
            `${chalk.cyanBright(`[${userClock}]`)} ${chalk.hex(
                config.colors.pink
            )("✅ Build done in, ")} ${Date.now() - time}ms`
        )
    );

    return classs;
}

let fileComment = fs.readFileSync("src/utils/fileComment.txt", "utf8");

fs.writeFileSync(
    "src/css/utilityClasses.bundle.css",
    `${fileComment}${cssmin(genarateClasses())}`
);
