/*
-----------------------------------------
Copyright (c) 2022, Facile CSS - https://www.facilecss.com
This file contains the code from Facile CSS open source project.
-----------------------------------------
*/

const fs = require('fs')
const path = require('path')
const child_process = require('child_process')
const chalk = require('chalk')
const Logger = require('./classes/Logger')
const Spinner = require('cli-spinner').Spinner

function getCSSFiles(dir) {
    return fs.readdirSync(dir).filter((file) => file.endsWith('.css'))
}

getCSSFiles(path.join(__dirname, './css')).forEach((file) => {
    const fileContents = fs.readFileSync(
        path.join(__dirname, './css', file),
        'utf8'
    )

    new Logger('info').log(`Processing ${file}`)

    fs.writeFileSync(
        path.join(__dirname, './dist', 'bundle.css'),
        fileContents,
        {
            flag: 'a',
        }
    )

    const spinner = new Spinner('Running tailwindcss... %s')
    spinner.setSpinnerString('|/-\\')
    spinner.start()

    child_process.execSync(`pnpm run dev:tailwindcss`, {
        stdio: 'inherit',
    })
})
