import { useContext } from "react";
import { ThemeContext } from "../theme/util/helpers";

export const useTheme = () => {
    const theme = useContext(ThemeContext);

    return theme;
};
