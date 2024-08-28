import {createAsyncThunk} from "@reduxjs/toolkit";
import {container} from "tsyringe";
import {CartModel} from "../../../../infrastructure/models/CartModel";
import {ICartApi} from "../../../../infrastructure/apis/cart/CartApi";

export const fetchCart = createAsyncThunk<CartModel | null>(
    'cart/fetchCart',
    async (_, {rejectWithValue}) => {
        try {
            return await container.resolve<ICartApi>("ICartApi").getCart()
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)