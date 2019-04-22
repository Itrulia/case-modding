import { Reducer } from "redux";
import { LoadMultipleCompleteAction } from "../load/action";

/* istanbul ignore next */
export function createLoadCompleteMultipleActionTest(
    reducer: Reducer<any, any>,
    action: LoadMultipleCompleteAction<any>
) {
    it("Should create an async state", () => {
        const result = reducer(undefined, action);
        const expected = {
            data: action.payload,
            loading: false,
            firstLoad: false,
            error: null
        };

        expect(result[action.id]).toEqual(expected);
    });

    it("Should reset loading", () => {
        const expected = {
            data: action.payload,
            loading: false,
            firstLoad: false,
            error: null
        };

        const state = {
            [action.id]: { ...expected, loading: true }
        };

        const result = reducer(state, action);
        expect(result[action.id]).toEqual(expected);
    });
}

/* istanbul ignore next */
export function createLoadCompleteMultipleActionErrorTest(
    reducer: Reducer<any, any>,
    action: LoadMultipleCompleteAction<any>
) {
    it("Should set error", () => {
        const expected = {
            data: null,
            loading: false,
            firstLoad: false,
            error: action.error
        };

        const state = {
            [action.id]: { ...expected, loading: true }
        };

        const result = reducer(state, action);
        expect(result[action.id]).toEqual(expected);
    });
}
