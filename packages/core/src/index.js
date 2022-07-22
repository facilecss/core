/*
-----------------------------------------
Copyright (c) 2022, Facile CSS - https://www.facilecss.com
This file contains the code from Facile CSS open source project.
-----------------------------------------
*/

const fs = require('fs')
const path = require('path')
const child_process = require('child_process')
const Spinner = require('cli-spinner').Spinner
const inquirer = require('inquirer')
const { Logger, checkForContent, getCSSFiles } = require('@facilecss/utils')

getCSSFiles(path.join(__dirname, './css')).forEach((file) => {
    const fileContents = fs.readFileSync(
        path.join(__dirname, './css', file),
        'utf8'
    )

    new Logger('info').log(`Processing ${file}`)

    checkForContent(path.join(__dirname, './dist', 'bundle.css'))
    new Logger('warn').log(
        `The file ${path.join(
            __dirname,
            './dist',
            'bundle.css'
        )} already contains content.`
    )

    new Logger('info').log(
        `Deleting the file contens ${path.join(
            __dirname,
            './dist',
            'bundle.css'
        )}`
    )

    setTimeout(() => {
        fs.writeFileSync(
            path.join(__dirname, './dist', 'bundle.css'),
            fileContents,
            {
                flag: 'a',
            }
        )
    }, 200)

    const spinner = new Spinner('Running tailwindcss... %s')
    spinner.setSpinnerString('|/-\\')
    spinner.start()

    spinner.stop(true)
})

// Tailwind Config Run
runQuestions()

function runQuestions() {
    console.log()
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'continue',
                message: 'What tailwind command do you want to run?',
                choices: [
                    {
                        name: 'dev:tailwindcss:watch',
                        value: 'dev:tailwindcss',
                    },

                    {
                        name: 'dev:tailwindcss',
                        value: 'dev:tailwindcss',
                    },
                ],
            },
        ])
        .then((answers) => {
            if (answers.continue === 'dev:tailwindcss') {
                // Run tailwindcss
                child_process.execSync(`pnpm run dev:tailwindcss`, {
                    stdio: 'inherit',
                })
            } else if (answers.continue === 'dev:tailwindcss:watch') {
                // Run tailwindcss
                child_process.execSync(`pnpm run dev:tailwindcss:watch`, {
                    stdio: 'inherit',
                })
            }
        })
}
