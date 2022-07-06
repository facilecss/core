/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

let questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        default: 'my-project',
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
            else
                return 'Project name may only include letters, numbers, underscores and hashes.'
        },
    },
]

inquirer.prompt(questions).then((answers) => {
    const configCompiler = require('../config')

    let configContent = `
module.exports = {
  projectName: "${answers.projectName}",
  version: "${configCompiler.compiler.version}",

  settings: {
    watch: {
        files: ['.html'], // this is the type of files facile will compile.
        dir: './', // this is the dir where your files are located.
    },
    outDir: "dist", // you can change to your custom choice, or leave it empty.
    outFile: "facile.build.css", // the default output file name is facile.build.css

     }
  };
    `

    let time = Date.now()

    const configFile = path.join(process.cwd(), configCompiler.compiler.file)

    fs.writeFileSync(configFile, configContent)

    console.log(chalk.cyanBright('✅ Your config file has been created.'))
    console.log(
        chalk.hex(configCompiler.colors.pink)(
            `⏰ Done in ${chalk.gray(Date.now() - time + 'ms!')}`
        )
    )
})
