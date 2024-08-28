import {fetchCart} from "./CartAsyncThunks";
import {CartModel} from "../../../../infrastructure/models/CartModel";
import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../../../redux/State";

const cartSlice = createSlice({
    name: "cart",
    initialState: () => initialState<CartModel | null>(),
    reducers: {
        setCart(state, action: PayloadAction<CartModel | null>) {
            state.loading = true;
            state.data = action.payload;
            state.error = null;
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
    }
});

export const {setCart} = cartSlice.actions;

export default cartSlice.reducer;