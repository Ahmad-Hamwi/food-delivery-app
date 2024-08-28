import {cart, CartModel} from "../../models/CartModel";

export interface ICartApi {
    getCart(): Promise<CartModel | null>;
}

export class CartApi implements ICartApi {
    getCart(): Promise<CartModel | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(cart)
            }, 2000);
        });
    }
}