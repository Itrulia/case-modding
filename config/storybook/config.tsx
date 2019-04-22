import { configure, addDecorator } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withOptions } from "@storybook/addon-options";
import { withNotes } from "@storybook/addon-notes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../projects/client/theme/theme";
import React from "react";
import { IntlProvider } from "react-intl";
import { translations } from "../../projects/client/translations";
import StoryRouter from "storybook-react-router";
import GlobalStyles from "../../projects/client/styles/styles";
import { Provider } from "react-redux";
import { configureStore } from "../../projects/client/store/store";

addDecorator(checkA11y);
addDecorator(StoryRouter());
addDecorator(
    withOptions({
        addonPanelInRight: true
    })
);
addDecorator(withNotes);
addDecorator(story => (
    <IntlProvider locale="en" messages={translations}>
        <>
            <GlobalStyles />
            {story()}
        </>
    </IntlProvider>
));
addDecorator(story => (
    <ThemeProvider theme={defaultTheme}>
        <>{story()}</>
    </ThemeProvider>
));

const store = configureStore();
addDecorator(story => (
    <Provider store={store}>{story()}</Provider>
));

const req = require.context("../../projects", true, /.story.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
