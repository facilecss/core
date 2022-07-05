/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const config = require("../config");
const colors = require("./colors");

/*======== Utility Classes starts here ========*/

const rootVar = {
    baseFontSize: "1rem",
    // baseBoxShadow: "1px 3px 5px rgba(0, 0, 0, 0.1)",
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

    // {
    //     name: "font-family",
    //     prefix: "font-family",
    //     values: {
    //         sans: "sans-serif",
    //         serif: "serif",
    //         mono: "monospace",
    //         inherit: "inherit",
    //     },
    // },
];

function genarateClasses() {
    let classs = "";
    classes.map((item) => {
        values = Object.keys(item.values)
            .map((key) => {
                return `.${item.prefix}-${key}: { ${item.name}: ${item.values[key]} };`;
            })
            .join("\n");

        classs += `\n${values}\n`;
    });

    return classs;
}

fs.writeFileSync("src/build/utilityClasses..bundle.css", genarateClasses());
