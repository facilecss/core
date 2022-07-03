#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const config = require("./config");
const moment = require("moment");

if (!fs.existsSync(path.resolve(__dirname, config.compiler.file))) {
  let userClock = moment().format("HH:mm:ss");

  console.log(
    chalk.gray(
      `${chalk.cyanBright(`[${userClock}]`)} ${chalk.hex(config.colors.pink)(
        config.compiler.file
      )} not found.`
    )
  );
  process.exit(1);
}
