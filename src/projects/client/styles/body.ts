import { createGlobalStyle } from "../theme/util/helpers";
import { pageBackground } from "../theme/theme/colors";

export const Body = createGlobalStyle`
    html {
        overflow-y: scroll;
    }

    html:dir(rtl) {
        direction: rtl;
    }

    body {
        position: relative;
        background: ${pageBackground};
    }

    * {
        direction: inherit;
    }

    *::before,
    *::after {
        direction: inherit;
    }
`;

export { Body as default };
