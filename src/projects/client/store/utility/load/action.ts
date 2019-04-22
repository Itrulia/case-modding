import { ErrorState } from "../async/error";
import { Action } from "redux";

export interface LoadAction extends Action {}

export interface LoadCompleteAction<T> extends Action {
    payload: T | null;
    error?: ErrorState;
}

export interface LoadMultipleAction extends LoadAction {
    id: number;
}

export interface LoadMultipleCompleteAction<T>
    extends LoadMultipleAction,
        LoadCompleteAction<T> {}
