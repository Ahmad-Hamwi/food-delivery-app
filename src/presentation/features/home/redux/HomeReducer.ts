import createConcreteSlice from "../../../redux/Reducer";
import {HomeAggregate} from "../../../../infrastructure/aggregates/HomeAggregate";
import {fetchHomeData} from "./HomeAsyncThunks";

export default createConcreteSlice<HomeAggregate>("home", fetchHomeData).reducer;