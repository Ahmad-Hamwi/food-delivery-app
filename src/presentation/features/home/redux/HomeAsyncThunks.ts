import {createAsyncThunk} from "@reduxjs/toolkit";
import {HomeAggregate} from "../../../../infrastructure/aggregates/HomeAggregate";
import {container} from "tsyringe";
import {IHomeApi} from "../../../../infrastructure/apis/home/MockedHomeApi";

export const fetchHomeData = createAsyncThunk<HomeAggregate | null>(
    'home/fetchHomeData',
    async (_, {rejectWithValue}) => {
        try {
            return await container.resolve<IHomeApi>("IHomeApi").getHomeData()
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)