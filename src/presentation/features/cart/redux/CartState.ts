import {initialState, State} from "../../../redux/State";
import {CartModel} from "../../../../infrastructure/models/CartModel";

export interface CartState extends State<CartModel | null> {
    subLoading: boolean;
    orderPlaced: boolean;
}

export const cartInitialState: CartState = {
    ...initialState<CartModel | null>(),
    subLoading: false,
    orderPlaced: false,
}
