---
layout: docs
title: Getting Started
---

# Getting Started with Facile CSS

Facile works for all most languages such as <strong>HTML, PHP, EJS, JSX/TSX</strong>. The facile compiler will scan all your files and the classes in your files. If the clases in your files match facile's then it compiles them to a single file.

### Step 1

Install the facile CLI

```bash
pnpm add -g @facilecss/core
```

### Step 2

Creating your config file.

```bash
facilecss init
```

Config File example

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

### Step 3

Start the compiler process. You can use the <code>--watch</code> flag to watch for changes.

```bash
facilecss build --watch
```

And then you are good to go. Read about how to use the <a href="/cli/config-file">config file</a>
