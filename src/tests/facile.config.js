module.exports = {
    projectName: 'my-project',
    version: '0.1.1-beta.0',

    settings: {
        watch: {
            files: ['.html'], // this is the type of files facile will compile.
            dir: './', // this is the dir where your files are located.
        },
        outDir: 'dist', // you can change to your custom choice, or leave it empty.
        outFile: 'facile.build.css', // the default output file name is facile.build.css
    },
}
