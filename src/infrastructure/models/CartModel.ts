import {OutletModel} from "./OutletModel";
import {OutletProductModel} from "./OutletProductModel";

interface CartModel {
    outlet: OutletModel;
    items: OutletProductModel[];
    selectedPaymentMethod: "cash" | null;
    subTotal: number;
    tax: number;
    total: number;
}