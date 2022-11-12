/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require("chalk");
const config = require("../config");

console.log(
    "📦 Facile CSS version: " +
        chalk.hex(config.colors.primary)(config.compiler.version)
);
process.exit(0);
