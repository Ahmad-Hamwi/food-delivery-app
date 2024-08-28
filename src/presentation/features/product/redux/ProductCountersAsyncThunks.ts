import {createAsyncThunk} from "@reduxjs/toolkit";
import {container} from "tsyringe";
import {CartModel} from "../../../../infrastructure/models/CartModel";
import {ICartApi} from "../../../../infrastructure/apis/cart/CartApi";
import {setCart} from "../../cart/redux/CartReducer";

export const incrementProductQuantity = createAsyncThunk<void, number>(
    'productCounters/incrementProductQuantity',
    async (productId, {dispatch, rejectWithValue}) => {
        try {
            const newCart = await container.resolve<ICartApi>("ICartApi").incrementItemQuantity(productId)

            dispatch(setCart(newCart))
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const decrementProductQuantity = createAsyncThunk<void, number>(
    'productCounters/decrementProductQuantity',
    async (productId, {dispatch, rejectWithValue}) => {
        try {
            const newCart = await container.resolve<ICartApi>("ICartApi").decrementItemQuantity(productId)

            dispatch(setCart(newCart))
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)