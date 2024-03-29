/*===========================================================================================
 *  Copyright (c) Facil CSS authors. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *===========================================================================================*/

const Client = require("./structures/Client");

const client = new Client({
    version: require("../package.json").version,
    name: "Facile CSS",
    description: require("../package.json").description,
    links: {
        github: "https://github.com/facilecss/core",
        npm: "https://www.npmjs.com/package/@facilecss/core",
    },
});

client.run();
module.exports = { client };
