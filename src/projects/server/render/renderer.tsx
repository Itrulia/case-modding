import {FastifyRequest} from "fastify";
import {IncomingMessage} from "http";
import React from "react";
import {renderToString} from "react-dom/server";
import {Helmet} from "react-helmet";
import {IntlProvider} from "react-intl";
import {Provider} from "react-redux";
import {Store} from "redux";
import {ServerStyleSheet} from "styled-components";
import {GlobalStyles} from "../../client/styles/styles";
import {translations} from "../../client/translations";
import {ConnectedTheme} from "../../client/theme/theme";
import {RootState} from "../../client/store/root";

const path = require("path");
const fs = require("fs");

export const indexFilePath = path.resolve(__dirname, "../../../../dist/app/index.html");
export const indexHtmlData = fs.readFileSync(indexFilePath, "utf8");

export default function serverRenderer(App, store: Store<RootState>) {
    return () => {
        const sheet = new ServerStyleSheet();

        const html = renderToString(
            sheet.collectStyles(
                <Provider store={store}>
                    <IntlProvider locale="en" messages={translations}>
                        <ConnectedTheme>
                            <>
                                <GlobalStyles />
                                <App />
                            </>
                        </ConnectedTheme>
                    </IntlProvider>
                </Provider>
            )
        );

        const preloadedState = store.getState();
        const styles = sheet.getStyleTags();
        const helmet = Helmet.renderStatic();

        return indexHtmlData
            .replace(
                `<div id="root"></div>`,
                `<div id="root">${html}</div>`
            )
            .replace(
                `<title></title>`,
                `${helmet.title.toString()}${helmet.meta.toString()}`
            )
            .replace(
                `__STATE__={}`,
                `__STATE__=${JSON.stringify(preloadedState)}`
            )
            .replace(`<style></style>`, `${styles}`);
    };
}
