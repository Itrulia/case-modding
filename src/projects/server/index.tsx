/// <reference types="react-scripts" />
/// <reference types="../../react-app-env" />

const register = require("ignore-styles").default;
const md5File = require("md5-file");
const path = require("path");
const fs = require("fs");
const reactParser = require("html-react-parser");

register([".css", ".jpg", ".png", ".svg", ".mp4", ".webm"], (mod, filename) => {
    const hash = md5File.sync(filename).slice(0, 8);
    const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);
    mod.exports = `/static/media/${bn}`;

    if (filename.endsWith(".svg")) {
        const content = fs.readFileSync(filename, "utf8");

        mod.exports = {
            default: `/static/media/${bn}`,
            ReactComponent: props => reactParser(content),
        };
    }

    return mod;
});

require("./server");