---
layout: docs
title: Getting Started
---

# Getting Started with Facile CSS

Facile works for all most languages such as <strong>HTML, PHP, EJS, JSX/TSX</strong>. The facile compiler will scan all your files and the classes in your files. If the files match facile's then it compiles them to a single file.

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

### Step 3

Start the compiler process. You can use the <code>--watch</code> flag to watch for changes.

```bash
facilecss build --watch
```

And then you are good to go. Read about how to use the <a href="/cli/config">config file</a>
