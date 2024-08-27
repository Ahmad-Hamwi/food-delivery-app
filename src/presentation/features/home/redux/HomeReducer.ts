import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./HomeState";
import {fetchHomeData} from "./HomeAsyncThunks";
import {HomeAggregate} from "../../../../infrastructure/aggregates/HomeAggregate";

const homeSlice = createSlice({
    name: "home",
    initialState: () => initialState<HomeAggregate>(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeData.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = null;
            })
            .addCase(fetchHomeData.rejected, (state, action) => {
                state.loading = false;
                state.data = null;
                state.error = action.payload as Error
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
                state.error = null
            })
    }
});

export default homeSlice.reducer;