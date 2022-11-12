/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const config = require("./config");
const moment = require("moment");

function checkForConfigFile() {
    if (!fs.existsSync(path.resolve(__dirname, config.compiler.file))) {
        let userClock = moment().format("HH:mm:ss");

        console.log(
            chalk.gray(
                `${chalk.cyanBright(`[${userClock}]`)} ${chalk.hex(
                    config.colors.pink
                )(config.compiler.file)} not found.`
            )
        );
        process.exit(1);
    }
}

function checkForConfigFileExist() {
    if (fs.existsSync(path.resolve(__dirname, config.compiler.file))) {
        let userClock = moment().format("HH:mm:ss");

        console.log(
            chalk.gray(
                `${chalk.cyanBright(`[${userClock}]`)} ${chalk.hex(
                    config.colors.pink
                )(config.compiler.file)} already exists.`
            )
        );
        process.exit(1);
    }
}

module.exports = { checkForConfigFile, checkForConfigFileExist };
