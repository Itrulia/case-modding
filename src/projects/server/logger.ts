import { createLogger } from "bunyan";

const loggerStreams: any[] = [
    {
        level: "debug",
        stream: process.stdout
    }
];

export const logger = createLogger({
    name: "case-modding",
    streams: loggerStreams,
    level: "debug",
    appname: "case-modding"
});
