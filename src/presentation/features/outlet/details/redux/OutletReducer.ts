import createConcreteSlice from "../../../../redux/Reducer";
import {OutletModel} from "../../../../../infrastructure/models/OutletModel";
import {fetchOutletDetails} from "./OutletAsyncThunks";

export default createConcreteSlice<OutletModel, number>("outlet", fetchOutletDetails).reducer;