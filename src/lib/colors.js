const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

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

function shader(color) {
    let shader = `
    :root {
        --color-primary: ${color.primary};
        --color-secondary: ${color.secondary};
        --color-error: ${color.error};
        --color-info: ${color.info};
        --color-teal: ${color.teal};
        --color-blue: ${color.blue};
        --color-red: ${color.red};
        --color-yellow: ${color.yellow};
        --color-green: ${color.green};
        --color-orange: ${color.orange};
        --color-purple: ${color.purple};
        --color-gray: ${color.gray};
        --color-black: ${color.black};
        --color-white: ${color.white};
    }
    `;

    function shadeColor(color, percent) {
        var f = parseInt(color.slice(1), 16),
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

    fs.writeFileSync("colors.css", shader);
}
