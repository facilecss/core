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

function genarateShades() {
    function shade(color, percent) {
        let f = parseInt(color.slice(1), 16),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = f >> 16,
            G = (f >> 8) & 0x00ff,
            B = f & 0x0000ff;

        return (
            "#" +
            (
                0x1000000 +
                (Math.round((t - R) * p) + R) * 0x10000 +
                (Math.round((t - G) * p) + G) * 0x100 +
                (Math.round((t - B) * p) + B)
            )
                .toString(16)
                .slice(1)
        );
    }

    function darken(color, percent) {
        return shade(color, percent);
    }

    function lighten(color, percent) {
        return shade(color, percent);
    }

    colorsClasses.push({
        name: "color-darken",
        prefix: "darken",
        values: {
            0: "0",
            1: darken(colors.primary, 0.1),
            2: darken(colors.primary, 0.2),
            3: darken(colors.primary, 0.3),
            4: darken(colors.primary, 0.4),
            5: darken(colors.primary, 0.5),
            6: darken(colors.primary, 0.6),
            7: darken(colors.primary, 0.7),
            8: darken(colors.primary, 0.8),
            9: darken(colors.primary, 0.9),
            10: darken(colors.primary, 1),
        },

        // color-lighten
        name: "color-lighten",
        prefix: "lighten",
        values: {
            0: "0",
            1: lighten(colors.primary, 0.1),
            2: lighten(colors.primary, 0.2),
            3: lighten(colors.primary, 0.3),
            4: lighten(colors.primary, 0.4),
            5: lighten(colors.primary, 0.5),
            6: lighten(colors.primary, 0.6),
            7: lighten(colors.primary, 0.7),
            8: lighten(colors.primary, 0.8),
            9: lighten(colors.primary, 0.9),
            10: lighten(colors.primary, 1),
        },
    });

    console.log(colorsClasses);
}

console.log(genarateShades());

module.exports = colors;
