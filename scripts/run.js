const runCmd = require('child_process').execSync
const inquirer = require('inquirer')

let commands = [
    {
        name: 'version',
        message: 'Show facile version',
    },

    {
        name: 'init',
        message: 'Initialize a new facile config file',
    },

    {
        name: 'build',
        message: 'Build a your css',
    },

    {
        name: 'build --watch',
        message: 'Build a your css and watch for changes',
    },
]

inquirer
    .prompt([
        {
            type: 'list',
            name: 'command',
            message: 'What do you want to do?',
            choices: commands,
        },
    ])
    .then((answers) => {
        if (answers.command === 'version') {
            runCmd('pnpm dev:cli version', { stdio: 'inherit' })
        } else if (answers.command === 'init') {
            runCmd('pnpm dev:cli init', { stdio: 'inherit' })
        } else if (answers.command === 'build') {
            runCmd('pnpm dev:cli build', { stdio: 'inherit' })
        } else if (answers.command === 'build --watch') {
            runCmd('pnpm dev:cli build --watch', { stdio: 'inherit' })
        }
    })
