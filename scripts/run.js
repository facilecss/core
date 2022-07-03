const runCmd = require("child_process").execSync;
const inquirer = require("inquirer");

let commands = [
    {
        name: "version",
        message: "Show facile version",
    },

    {
        name: "init",
        message: "Initialize a new facile config file",
    },
];

inquirer
    .prompt([
        {
            type: "list",
            name: "command",
            message: "What do you want to do?",
            choices: commands,
        },
    ])
    .then((answers) => {
        if (answers.command === "version") {
            runCmd("pnpm dev:cli version", { stdio: "inherit" });
        } else if (answers.command === "init") {
            runCmd("pnpm dev:cli init", { stdio: "inherit" });
        }
    });
