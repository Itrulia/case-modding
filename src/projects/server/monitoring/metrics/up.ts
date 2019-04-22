const { Gauge } = require("prom-client");

export const up = new Gauge({
    name: "up",
    help: "1 = up, 0 = not up"
});

up.set(1);
