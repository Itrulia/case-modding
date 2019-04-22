import {
    LoadMultipleCompleteAction,
    LoadMultipleAction,
    LoadAction,
    LoadCompleteAction
} from "./action";
import { setToLoadingComplete, setToLoading } from "./state";
import {
    createLoadingAsyncState,
    AsyncState,
    AsyncStateMap
} from "../async/state";
import { Reducer, AnyAction } from "redux";
import { produce } from "immer";

type LoadMultipleBundle<EntryType> =
    | LoadMultipleAction
    | LoadMultipleCompleteAction<EntryType>
    | AnyAction;

export function createMultipleLoadReducer<EntryType>(
    loading: string,
    complete: string
): Reducer<AsyncStateMap<EntryType>> {
    const initialState = {};

    return (state = initialState, action: LoadMultipleBundle<EntryType>) => {
        if (action.type === loading) {
            return produce(state, (draft: any) => ({
                ...draft,
                [action.id]: setToLoading(
                    draft[action.id] || createLoadingAsyncState()
                )
            }));
        }

        if (action.type === complete) {
            return produce(state, (draft: any) => ({
                ...draft,
                [action.id]: setToLoadingComplete(
                    draft[action.id],
                    action as LoadMultipleCompleteAction<EntryType>
                )
            }));
        }

        return state;
    };
}

type LoadBundle<EntryType> =
    | LoadAction
    | LoadCompleteAction<EntryType>
    | AnyAction;

export function createLoadReducer<EntryType>(
    loading: string,
    complete: string
): Reducer<AsyncState<EntryType>> {
    const initialState = createLoadingAsyncState<EntryType>();

    return (state = initialState, action: LoadBundle<EntryType>) => {
        if (action.type === loading) {
            return setToLoading(state);
        }

        if (action.type === complete) {
            return setToLoadingComplete(state, action as LoadCompleteAction<
                EntryType
            >);
        }

        return state;
    };
}
