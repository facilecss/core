/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const moment = require("moment");
const colors = require("./colors");

const pathToCSSfiles = path.resolve(__dirname, "../css");

fs.readdirSync(pathToCSSfiles).forEach((file) => {
    fs.readFile(path.resolve(pathToCSSfiles, file), "utf8", (err, data) => {
        fs.writeFile(
            path.resolve(__dirname, "../css/facile.min.css"),
            data,
            (err) => {
                if (err) {
                    console.log(err);
                }
            }
        );
    });
});
