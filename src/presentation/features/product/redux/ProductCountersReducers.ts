import {decrementProductQuantity, incrementProductQuantity} from "./ProductCountersAsyncThunks";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState, ProductCountersState} from "./ProductCountersState";

const productCountersSlice = createSlice({
    name: "productCounters",
    initialState,
    reducers: {
        initializeProductCounters(state, action: PayloadAction<number[]>) {
            state.data = action.payload.map(id => {
                return {productId: id, isLoading: false}
            });
        },
    },
    extraReducers: (builder) => {
        const setLoading = (state: ProductCountersState, productId: number, isLoading: boolean) => {
            const product = state.data?.find(p => p.productId === productId);
            if (product) {
                product.isLoading = isLoading;
            }
        }

        builder
            .addCase(incrementProductQuantity.pending, (state, action) => {
                setLoading(state, action.meta.arg, true)
            })
            .addCase(incrementProductQuantity.rejected, (state, action) => {
                setLoading(state, action.meta.arg, false)
            })
            .addCase(incrementProductQuantity.fulfilled, (state, action) => {
                setLoading(state, action.meta.arg, false)
            })
            .addCase(decrementProductQuantity.pending, (state, action) => {
                setLoading(state, action.meta.arg, true)
            })
            .addCase(decrementProductQuantity.rejected, (state, action) => {
                setLoading(state, action.meta.arg, false)
            })
            .addCase(decrementProductQuantity.fulfilled, (state, action) => {
                setLoading(state, action.meta.arg, false)
            })
    }
});

export const {initializeProductCounters} = productCountersSlice.actions;

export default productCountersSlice.reducer;