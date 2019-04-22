import serverRenderer from "./renderer";
import serveStatic from "fastify-static";
import { FastifyInstance } from "fastify";
import { getValue, setValue } from "../cache";

const path = require("path");
const { App, store } = require(`../../client/app`);
const renderer = serverRenderer(App, store);

export const renderMiddleware = (fastify: FastifyInstance) => {
    fastify.register(serveStatic, {
        root: path.resolve(__dirname, "../../../../dist/app/static"),
        prefix: "/static/"
    });

    fastify.get("*", async (req, res) => {
        const url = req.req.url!;
        const cachedValue = await getValue(url);
        const data = cachedValue ? cachedValue : renderer(req);

        if (!cachedValue) {
            setValue(url, data);
        }

        res.header("Content-Type", "text/html");
        res.status(200);
        res.send(data);
    });
};
