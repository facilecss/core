#!/usr/bin/env node

/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const config = require("./config");
const moment = require("moment");

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
} else {
}

/*======== Command Handler ========*/

const commands = [
    {
        name: "version",
        description: "Prints the version of the cli",
        action: require("./cmds/version"),
    },
];

module.exports = { commands };

// forEach commands
commands.forEach((command) => {
    if (command.name === process.argv[2]) {
        command.action();
    }
});

module.exports = { commands };
