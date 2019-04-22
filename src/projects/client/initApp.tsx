import React, {FunctionComponent} from "react";
import { render, hydrate } from "react-dom";
import * as serviceWorker from "../../serviceWorker";

import { RootState } from "./store/root";
import { Provider } from "react-redux";

import { IntlProvider } from "react-intl";
import { translations } from "./translations";
import Theme from "./theme/theme/index";
import GlobalStyles from "./styles/styles";

import "./global.css";
import {Store} from "redux";

const renderReact = (element: JSX.Element, root: HTMLElement) => {
    if (root.innerHTML.trim().length) {
        return hydrate(element, root);
    }

    return render(element, root);
};

export const initApplication = (App: FunctionComponent, store: Store<RootState>) => {
    renderReact(
        <Provider store={store}>
            <IntlProvider locale="en" messages={translations}>
                <Theme>
                    <>
                        <GlobalStyles />
                        <App />
                    </>
                </Theme>
            </IntlProvider>
        </Provider>,
        document.getElementById("root") as HTMLElement
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
};