import createConcreteSlice from "../../../redux/Reducer";
import {fetchCart} from "./CartAsyncThunks";
import {CartModel} from "../../../../infrastructure/models/CartModel";

export default createConcreteSlice<CartModel>("cart", fetchCart).reducer;