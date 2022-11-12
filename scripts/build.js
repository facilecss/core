const runCmd = require('child_process').execSync
const inquirer = require('inquirer')

let buildOptionScripts = [
    {
        name: 'utilityClasses',
        message: 'Build utility classes',
    },

    {
        name: 'colors',
        message: 'Build colors',
    },

    {
        name: 'components',
        message: 'Build components',
    },

    {
        name: 'all',
        message: 'Build all classes',
    },
]

inquirer
    .prompt([
        {
            type: 'list',
            name: 'command',
            message: 'What build would you like to do?',
            description: '',
            choices: buildOptionScripts,
        },

        {
            type: 'confirm',
            name: 'confirm',
            message: 'Are you sure?',
            default: true,
        },
    ])
    .then((answers) => {
        if (answers.command === 'utilityClasses') {
            runCmd('node src/lib/utilityClasses.js', { stdio: 'inherit' })
        } else if (answers.command === 'colors') {
            runCmd('node src/lib/colors.js', { stdio: 'inherit' })
        } else if (answers.command === 'all') {
            runCmd('node src/lib/buildAll.js', { stdio: 'inherit' })
        } else if (answers.command === 'components') {
            runCmd('node src/lib/componentsClasses.js', { stdio: 'inherit' })
        }
    })
