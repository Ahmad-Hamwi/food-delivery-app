import {OutletModel} from "../models/OutletModel";
import {CartModel} from "../models/CartModel";

interface OutletScreenAggregate {
    outlet: OutletModel | null;
    cart: CartModel | null;
}