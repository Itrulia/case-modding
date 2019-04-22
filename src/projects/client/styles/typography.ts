import { createGlobalStyle } from "../theme/util/helpers";
import {
    bodyLineHeight,
    bodyFontSize,
    h1FontSize,
    h1LineHeight,
    h2FontSize,
    h2LineHeight,
    h3FontSize,
    h3LineHeight,
    h4FontSize,
    h4LineHeight,
    h5LineHeight,
    h5FontSize,
    h6FontSize,
    h6LineHeight
} from "../theme/theme/font-sizes";
import { primaryForeground } from "../theme/theme/colors";
import { verticalMargin } from "../theme/theme/sizes";

export const Typography = createGlobalStyle`
    body {
        font-family: "Roboto", sans-serif;
        font-display: swap;
        font-weight: 400;
        font-size: ${bodyFontSize};
        line-height: ${bodyLineHeight};
        color: ${primaryForeground};

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-variant-numberic: tabular-nums;
        font-feature-settings: "tnum";
    }

    strong {
        font-weight: 500;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        margin-top: 0;
        margin-bottom: ${verticalMargin};
    }

    h1 {
        font-size: ${h1FontSize};
        line-height: ${h1LineHeight};
    }

    h2 {
        font-size: ${h2FontSize};
        line-height: ${h2LineHeight};
    }

    h3 {
        font-size: ${h3FontSize};
        line-height: ${h3LineHeight};
    }

    h4 {
        font-size: ${h4FontSize};
        line-height: ${h4LineHeight};
    }

    h5 {
        font-size: ${h5FontSize};
        line-height: ${h5LineHeight};
    }

    h6 {
        font-size: ${h6FontSize};
        line-height: ${h6LineHeight};
    }
`;

export { Typography as default };
