/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const colors = {
    primary: "#ea4442",
    secondary: "#f5f5f5",
    error: "#d32752",
    info: "#00bcd4",
    teal: "#009688",
    blue: "#1919e6",
    red: "#e61919",
    yellow: "#e6e619",
    green: "#19e635",
    orange: "#ffa600",
    purple: "#9900ff",
    gray: "#808080",
    black: "black",
    white: "white",
};

let colorsClasses = [
    {
        name: "color",
        prefix: "color",
        values: colors,
    },
];

function genarateClasses() {
    colorsClasses.forEach((colorClass) => {
        Object.keys(colorClass.values).forEach((key) => {
            colorClass.values[
                key
            ] = `.${colorClass.prefix}-${key} { color: ${colorClass.values[key]}; }`;
        });
    });
}

console.log(genarateClasses());

module.exports = colors;
