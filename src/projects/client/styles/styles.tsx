import React, { SFC } from "react";
import Typography from "./typography";
import Body from "./body";
import BoxSizing from "./box-sizing";
import GoogleFont, {FontWeight} from "./font";
import Svg from "./svg";
import Normalize from "./normalize";

export const GlobalStyles: SFC = () => (
    <>
        <GoogleFont fonts={[
            { family: "Roboto", weights: [
                FontWeight.Normal,
                FontWeight.NormalItalics,
                FontWeight.Medium,
                FontWeight.Bold
            ] }
        ]} />

        <Normalize />
        <BoxSizing />
        <Typography />
        <Body />
        <Svg />
    </>
);

export {GlobalStyles as default};