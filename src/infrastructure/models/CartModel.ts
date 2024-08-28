import {OutletModel, outletsData} from "./OutletModel";
import {OutletProductModel, outletProducts} from "./OutletProductModel";

export interface CartModel {
    outlet: OutletModel;
    items: OutletProductModel[];
    selectedPaymentMethod: "cash" | null;
    subTotal: number;
    tax: number;
    total: number;
}

const selectedOutlet: OutletModel = outletsData[0];

const selectedItems: OutletProductModel[] = [
    outletProducts[1][0],
    outletProducts[1][1],
    outletProducts[1][2],
];

const subTotal = selectedItems.reduce((total, item) => total + item.price, 0);
const taxRate = 0.05;
const tax = subTotal * taxRate;
const total = subTotal + tax;

export const cart: CartModel = {
    outlet: selectedOutlet,
    items: selectedItems,
    selectedPaymentMethod: "cash",
    subTotal: subTotal,
    tax: tax,
    total: total,
};