import React, {SFC} from "react";
import {configureStore} from "./store/store";
import {RootState} from "./store/root";

declare global {
    interface Window { __STATE__: Partial<RootState>; }
}

const state: Partial<RootState> = typeof window !== "undefined" ? {...window.__STATE__} : {};
export const store = configureStore(state);

export const App: SFC = props => <></>;