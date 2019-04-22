import { buckets } from "./utility";
import { Summary, Histogram } from "prom-client";

const labels = ["status_code", "method"];

export const summary = new Summary({
    name: "http_request_duration_seconds_summary",
    help: `duration summary of http responses labeled with: ${labels.join(
        ", "
    )}`,
    labelNames: labels,
    percentiles: buckets
});

export const histogram = new Histogram({
    name: "http_request_duration_seconds_histogram",
    help: `duration histogram of http responses labeled with: ${labels.join(
        ", "
    )}`,
    labelNames: labels,
    buckets: buckets
});
