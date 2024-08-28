import {createAsyncThunk} from "@reduxjs/toolkit";
import {container} from "tsyringe";
import {IOutletApi} from "../../../../../infrastructure/apis/outlet/OutletApi";
import {OutletModel} from "../../../../../infrastructure/models/OutletModel";
import {setCart} from "../../../cart/redux/CartReducer";
import {initializeProductCounters} from "../../../product/redux/ProductCountersReducers";

export const fetchOutletDetails = createAsyncThunk<OutletModel | null, number>(
    'outlet/fetchOutletDetails',
    async (outletId, {dispatch, rejectWithValue}) => {
        try {
            const {outlet, cart} = await container.resolve<IOutletApi>("IOutletApi").getOutletDetails(outletId)

            dispatch(setCart(cart))
            dispatch(initializeProductCounters(outlet?.products?.map(p => p.id) ?? []))

            return outlet;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)