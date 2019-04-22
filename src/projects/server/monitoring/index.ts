import { FastifyInstance } from "fastify";
import { up } from "./metrics/up";
import * as http from "./metrics/http";

import * as prometheus from "prom-client";
import { indexFilePath } from "../render/renderer";
const fs = require("fs");

const { collectDefaultMetrics } = prometheus;
const interval = collectDefaultMetrics();

export const monitoringMiddleware = (fastify: FastifyInstance) => {
    const metrics = { up, http };
    const labels: any = {};
    let timers: any = [];

    fastify.get("/metrics", (_, res) => {
        res.header("Content-Type", "text/plain");
        res.status(200).send(prometheus.register.metrics());
    });

    fastify.get("/health", (_, res) => {
        const exists = fs.existsSync(indexFilePath);

        if (exists) {
            res.status(200).send("OK");
        } else {
            res.status(500).send("NOT OK");
        }
    });

    fastify.addHook("onRequest", (req, _, next) => {
        timers = Object.keys(metrics.http).map(key => {
            return metrics.http[key].startTimer(labels);
        });

        next();
    });

    fastify.addHook("onResponse", function(req, res, next) {
        labels.status_code = res.res.statusCode;
        labels.method = req.req.method;

        timers.forEach(timer => timer());

        next();
    });
};
