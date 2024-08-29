import {checkPaymentMethod, fetchCart, placeOrder} from "./CartAsyncThunks";
import {CartModel} from "../../../../infrastructure/models/CartModel";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cartInitialState} from "./CartState";

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        setCart(state, action: PayloadAction<CartModel | null>) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            state.subLoading = false;
            state.orderPlaced = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
                state.data = undefined;
                state.error = null;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.data = undefined;
                state.error = action.payload as Error
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
                state.error = null
            })
            .addCase(checkPaymentMethod.pending, (state) => {
                state.subLoading = true;
            })
            .addCase(checkPaymentMethod.rejected, (state, action) => {
                state.subLoading = false;
                state.error = action.payload as Error
            })
            .addCase(checkPaymentMethod.fulfilled, (state, action) => {
                state.subLoading = false;
                state.data = action.payload
            })
            .addCase(placeOrder.pending, (state) => {
                state.subLoading = true;
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.subLoading = false;
                state.error = action.payload as Error
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.subLoading = false;
                state.orderPlaced = true;
            })
    }
});

export const {setCart} = cartSlice.actions;

export default cartSlice.reducer;