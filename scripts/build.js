const runCmd = require("child_process").execSync;
const inquirer = require("inquirer");

let buildOptionScripts = [
    {
        name: "utilityClasses",
        message: "Build utility classes",
    },
];

inquirer
    .prompt([
        {
            type: "list",
            name: "command",
            message: "What build would you like to do?",
            choices: buildOptionScripts,
        },

        {
            type: "confirm",
            name: "confirm",
            message: "Are you sure?",
            default: true,
        },
    ])
    .then((answers) => {
        if (answers.command === "utilityClasses") {
            runCmd("node src/lib/utilityClasses.js", { stdio: "inherit" });
        }
    });
