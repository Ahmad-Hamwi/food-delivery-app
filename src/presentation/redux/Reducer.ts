import {AsyncThunk, createSlice, Draft} from "@reduxjs/toolkit";
import {initialState} from "./State";

export default function createConcreteSlice<Model, ThunkArg = void>(
    name: string,
    asyncThunk: AsyncThunk<Model | null, ThunkArg, any>
) {
    return createSlice({
        name: name,
        initialState: () => initialState<Model | null>(),
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(asyncThunk.pending, (state) => {
                    state.loading = true;
                    state.data = undefined;
                    state.error = null;
                })
                .addCase(asyncThunk.rejected, (state, action) => {
                    state.loading = false;
                    state.data = undefined;
                    state.error = action.payload as Error
                })
                .addCase(asyncThunk.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload as Draft<Model>
                    state.error = null
                })
        }
    });
}