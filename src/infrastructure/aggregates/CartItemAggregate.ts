import {OutletProductModel} from "../models/OutletProductModel";

export interface CartItemAggregate {
    product: OutletProductModel
    quantity: number;
}