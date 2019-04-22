import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { RootState } from "../../store/root";
import { ThemeInterface } from "../util/helpers";
import {getTheme} from "../theme.selector";

export const defaultTheme: ThemeInterface = {
    mode: "dark",
    mood: "playful",
    primaryHue: 258,
    secondaryHue: 8,
    dangerHue: 355,
    warningHue: 48,
    successHue: 161,
    gridSpan: 0.375
};

const mapStateToProps = (state: RootState) => ({
    theme: getTheme(state)
});

export const ConnectedTheme = connect(mapStateToProps)(ThemeProvider);
export { ConnectedTheme as default};