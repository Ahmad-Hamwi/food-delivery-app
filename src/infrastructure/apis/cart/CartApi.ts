import {cart, CartModel, setCart} from "../../models/CartModel";
import {productsFlat} from "../../models/OutletProductModel";
import {outletsData} from "../../models/OutletModel";
import {CartItemAggregate} from "../../aggregates/CartItemAggregate";

export interface ICartApi {
    getCart(): Promise<CartModel | null>;

    incrementItemQuantity(productId: number): Promise<CartModel | null>;

    decrementItemQuantity(productId: number): Promise<CartModel | null>;
}

export class CartApi implements ICartApi {
    getCart(): Promise<CartModel | null> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(cart), 2000);
        });
    }

    incrementItemQuantity(productId: number): Promise<CartModel | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!cart) { // no cart before
                    resolve(this.createNewCartWithItem(productId))
                }

                const productInCart = cart!.items.find(item => item.product.id === productId);

                if (productInCart) { // mutating the quantity for a cart item
                    const itemsAfterIncrement = cart!.items.map(i => i.product.id === productId ?
                        {product: i.product, quantity: i.quantity + 1} : i
                    )
                    resolve(this.createNewCartAfterQuantityChange(itemsAfterIncrement))
                } else { // see if product should be added
                    const outletId = productsFlat.find(i => i.id === productId)!.outletId;

                    if (outletId === cart!.outlet.id) { // same outlet, add product

                        const itemsAfterIncrement = [
                            ...cart!.items,
                            {product: productsFlat.find(i => i.id === productId)!, quantity: 1}
                        ];
                        resolve(this.createNewCartAfterQuantityChange(itemsAfterIncrement))
                    } else { // different outlet, replace cart
                        resolve(this.createNewCartWithItem(productId))
                    }
                }
            }, 1000);
        });
    }

    decrementItemQuantity(productId: number): Promise<CartModel | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!cart) { // no cart before, return as is
                    resolve(cart)
                }

                const productInCart = cart!.items.find(item => item.product.id === productId);
                if (!productInCart) { // no product item in cart, return as is
                    resolve(cart)
                }

                if (productInCart!.quantity > 1) { // We can remove 1 without quantity getting 0
                    const selectedItems = cart!.items.map(i => i.product.id === productId ?
                        {product: i.product, quantity: i.quantity - 1} : i
                    )

                    resolve(this.createNewCartAfterQuantityChange(selectedItems))
                } else { // Remove the item when getting 0
                    const selectedItems = cart!.items.filter(item => item.product.id !== productId)

                    if (selectedItems.length > 0) {
                        resolve(this.createNewCartAfterQuantityChange(selectedItems))
                    } else {
                        setCart(null)
                        resolve(cart)
                    }
                }
            }, 1000);
        });
    }

    private createNewCartAfterQuantityChange(items: CartItemAggregate[]): CartModel {
        const subTotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        const taxRate = 0.05;
        const tax = subTotal * taxRate;
        const total = subTotal + tax;

        setCart(
            {
                ...cart!,
                items: items,
                subTotal: subTotal,
                tax: tax,
                total: total,
            }
        )

        return cart!;
    }

    private createNewCartWithItem(productId: number): CartModel {
        const outletId = productsFlat.find(p => p.id === productId)!.outletId
        const outlet = outletsData.find(outlet => outlet.id === outletId)!;
        const product = productsFlat.find(p => p.id === productId)!;
        const selectedItems = [{product: product, quantity: 1}]
        const subTotal = selectedItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        const taxRate = 0.05;
        const tax = subTotal * taxRate;
        const total = subTotal + tax;

        setCart(
            {
                outlet: outlet,
                items: [{product: product, quantity: 1}],
                selectedPaymentMethod: null,
                subTotal: subTotal,
                tax: tax,
                total: total,
            }
        )

        return cart!;
    }
}