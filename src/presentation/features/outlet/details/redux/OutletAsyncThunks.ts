import {createAsyncThunk} from "@reduxjs/toolkit";
import {container} from "tsyringe";
import {IOutletApi} from "../../../../../infrastructure/apis/outlet/OutletApi";
import {OutletModel} from "../../../../../infrastructure/models/OutletModel";

export const fetchOutletDetails = createAsyncThunk<OutletModel | null, number>(
    'outlet/fetchOutletDetails',
    async (outletId, {rejectWithValue}) => {
        try {
            return await container.resolve<IOutletApi>("IOutletApi").getOutletDetails(outletId)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)