import {createSlice} from "@reduxjs/toolkit";
import {fetchOutlets} from "../../outlet/details/redux/OutletAsyncThunks";
import {initialSearchState} from "./SearchState";

const slice = createSlice({
    name: "search",
    initialState: initialSearchState,
    reducers: {
        initializeSearch() {
            return initialSearchState
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOutlets.pending, (state) => {
                state.loading = true;
                state.data = undefined;
                state.error = null;
            })
            .addCase(fetchOutlets.rejected, (state, action) => {
                state.loading = false;
                state.data = undefined;
                state.error = action.payload as Error
            })
            .addCase(fetchOutlets.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
                state.error = null
            })
    }
});

export const {initializeSearch} = slice.actions;

export default slice.reducer;