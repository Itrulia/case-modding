import fastify from "fastify";
const helmet = require("fastify-helmet");
import { renderMiddleware } from "./render";
import { monitoringMiddleware } from "./monitoring/index";
import { logger } from "./logger";

const app = fastify({
    ignoreTrailingSlash: true,
    logger: logger
});

app.setErrorHandler((error, req, res) => {
    logger.error(error);

    res.status(500).send("Internal Server Error");
});

app.register(helmet);
monitoringMiddleware(app);
renderMiddleware(app);

/**
 * [1]: We want to listen to all IPv4 interfaces instead of just localhost
 */
app.listen(
    8000,
    "0.0.0.0", // [1]
    err => {
        if (err) {
            throw err;
        }
    }
);

process.on("uncaughtException", err => {
    logger.error(err);
    process.exit(1);
});
