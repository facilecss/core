const chalk = require("chalk");

class Client {
    constructor(options) {
        this.version = options.version;
        this.name = options.name;
        this.description = options.description;
        this.links = options.links;
    }

    get(key) {
        return this[key];
    }

    run() {
        if (!this.version || !this.name || !this.description || !this.links) {
            console.log(
                chalk.red(
                    "❌ Detected missing required fields in your config file."
                )
            );

            return;
        } else {
            console.log(chalk.green("✅ No errors detected."));
        }
    }
}

module.exports = Client;
