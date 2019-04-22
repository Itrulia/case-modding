import {createGlobalStyle, ThemeInterface} from "../theme/util/helpers";
import React, {SFC, memo} from "react";
import {getTheme} from "../theme/theme.selector";
import {RootState} from "../store/root";
import {connect} from "react-redux";
import {primaryBackground, secondaryBackground} from "../theme/theme/colors";

const SvgCSS = createGlobalStyle`
    svg {
        fill: currentColor;
    }
`;

export enum SVGFilters {
    primaryToSecondary = "primary-to-secondary"
}

const mapStateToProps = (state: RootState) => ({
    theme: getTheme(state)
});

interface SvgFilterProps {
    theme: ThemeInterface;
}

const SvgFilter = connect(mapStateToProps)(memo<SvgFilterProps>(({theme}) => {
    const primary = primaryBackground({theme});
    const secondary = secondaryBackground({theme});

    return <svg style={{visibility: "hidden", display: "none"}}>
        <defs>
            <linearGradient id={SVGFilters.primaryToSecondary} x1="1" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor={primary}></stop>
                <stop offset="100%" stopColor={secondary}></stop>
            </linearGradient>
        </defs>
    </svg>;
}));

export const Svg: SFC = memo(() => <>
    <SvgCSS />
    <SvgFilter />
</>);

export { Svg as default };
