const { argv } = require("yargs");

export const production: boolean = Boolean(argv.prod);
