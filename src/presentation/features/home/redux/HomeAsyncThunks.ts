import {createAsyncThunk} from "@reduxjs/toolkit";
import {HomeAggregate} from "../../../../infrastructure/aggregates/HomeAggregate";
import {HomeApi, IHomeApi} from "../../../../infrastructure/apis/home/HomeApi";

// type Args = {
//     homeApi: IHomeApi,
// }

export const fetchHomeData = createAsyncThunk<HomeAggregate>(
    'home/fetchHomeData',
    async (_, {rejectWithValue}) => {
        try {
            return await new HomeApi().getHomeData() // todo: inject homeApi instead
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)