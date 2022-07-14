---
layout: docs
title: Config File
---

# Config File

To create a config file see <a href="/cli/commands#init">the init command</a>

So the config file is pretty simple to use. The top lines are your project name & the version of facile you are using. We prefer to use the latest version of facile, but you can use any version you want.

Here is an example of af config file:

```js
module.exports = {
    projectName: '${projectName}',
    version: '${compiler.version}',

    settings: {
        watch: {
            dir: './', // this is the dir where your files are located.
        },
        outDir: './dist', // you can change to your custom choice, or leave it empty.
        outFile: 'facile.build.css', // the default output file name is facile.build.css
    },
}
```

### Settings Config

The proberty for the settings is <code>settings.\*</code>

-   <code>settings.watch.dir</code> - The directory where your files are located.
-   <code>settings.outDir</code> - The directory where the output file will be located. (You will get an error if the directory does not exist, so create it first.) The default are your current directory.
-   <code>settings.outFile</code> - The name of the output file. The default is <code>facile.build.css</code>.
