import {OutletModel} from "./OutletModel";
import {CartItemAggregate} from "../aggregates/CartItemAggregate";

export interface CartModel {
    outlet: OutletModel;
    items: CartItemAggregate[];
    selectedPaymentMethod: "cash" | null;
    subTotal: number;
    tax: number;
    total: number;
}

export function isCartValidForSubmission(cart: CartModel): boolean {
    return cart.selectedPaymentMethod !== null;
}

export function setCart(newCart: CartModel | null) {
    cart = newCart;
}

export let cart: CartModel | null = null;