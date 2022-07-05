/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const config = require("../config");
const colors = require("./colors");
const cssmin = require("cssmin");
const moment = require("moment");

/*======== Utility Classes starts here ========*/

const rootVar = {
    baseFontSize: "1rem",
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
