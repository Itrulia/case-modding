import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { ThemeInterface } from "../theme/util/helpers";
import { themeReducer } from "../theme/theme.reducer";

export interface RootState {
    theme: ThemeInterface;
}

export const rootReducer = combineReducers<RootState>({
    theme: themeReducer
});

export const rootEpic = combineEpics();
