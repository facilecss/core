---
layout: docs
title: Commands
---

# CLI commands

Read about all the types of commands facile comes with.

-   [`build`](/cli/commands#build)
-   [`init`](/cli/commands#init)
-   [`version`](/cli/commands#version)
-   [`--watch`](/cli/commands#watch)

### Build

To use the build command, you must have created a <code>facile.config.js</code> file.
Build command is scanning all your files, and find classes. If the files match facile's then it compiles them to a single file.

#### Usage

```bash
facilecss build
```

### Init

This command is to initialize a new config file. The command will asks you the following question:

-   What is your project name?

#### Usage

```bash
facilecss init
```

Config file output

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

### Version

See your current version of facile CSS.

#### Usage

```bash
facilecss version
```

### Watch

You can use the <code>--watch</code> flag to watch for changes in your files.

#### Usage

```bash
facilecss build --watch
```
