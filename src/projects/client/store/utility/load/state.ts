import { LoadCompleteAction } from "./action";
import { AsyncState } from "../async/state";

export const setToLoading = <T>(state: AsyncState<T>): AsyncState<T> => ({
    ...state,
    loading: true,
    error: null
});

export function setToLoadingComplete<T>(
    state: AsyncState<T>,
    action: LoadCompleteAction<T>
): AsyncState<T> {
    return {
        ...state,
        data: action.payload,
        loading: false,
        firstLoad: false,
        error: action.error ? action.error : null
    };
}
