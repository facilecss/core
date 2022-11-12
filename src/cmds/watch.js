/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const chokidar = require('chokidar')
const child_process = require('child_process')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const Logger = require('../structures/Logger')
const { compiler, colors } = require('../config')

/*======== Config file ========*/

const configFile = path.join(process.cwd(), compiler.file)
const config = require(configFile)
const outPutFileName = config.settings.outFile

if (!fs.existsSync(configFile)) {
    process.exit(1)
}

/*======== Start on the watcher ========*/
new Logger(
    'info',
    `Watching for changes, in ${chalk.hex(colors.orange)(
        config.settings.watch.dir
    )}...`
).log()

const watcher = chokidar.watch(config.settings.watch.dir, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
})

watcher.on('change', (path, stats) => {
    if (stats) {
        if (stats.isDirectory()) {
            return
        }
    }

    if (path.split('/').pop() === outPutFileName || 'facile.build.css') {
        return
    } else {
        new Logger('info', 'Rebuilding...').log()
        child_process.execSync(`node src/cli build --watch`, {
            stdio: 'inherit',
        })
    }
})
