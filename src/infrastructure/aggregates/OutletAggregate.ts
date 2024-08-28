import {OutletModel} from "../models/OutletModel";
import {CartModel} from "../models/CartModel";

export interface OutletAggregate {
    outlet: OutletModel | null;
    cart: CartModel | null;
}