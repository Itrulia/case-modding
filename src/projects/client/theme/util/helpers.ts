import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import { HasMode } from "./mode";
import { HasMood } from "./mood";

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
    ThemeContext
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export interface TypographyScale {
    lineHeight: number;
    fontSize: number;
}

export interface ThemeInterface extends HasMode, HasMood {
    primaryHue: number;
    secondaryHue: number;
    // states
    dangerHue: number;
    warningHue: number;
    successHue: number;

    gridSpan: number;
}

export {
    css,
    styled,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
    ThemeContext
};

export interface Props {
    theme: ThemeInterface;
}

export type themeFunction = (props: Props) => string;
