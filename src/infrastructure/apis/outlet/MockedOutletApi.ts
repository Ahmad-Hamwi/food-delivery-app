import {outletsData} from "../../models/OutletModel";
import {outletProducts} from "../../models/OutletProductModel";
import {OutletAggregate} from "../../aggregates/OutletAggregate";
import {cart} from "../../models/CartModel";

export interface IOutletApi {
    getOutletDetails(outletId: number): Promise<OutletAggregate>;
}

export class MockedOutletApi implements IOutletApi {
    getOutletDetails(outletId: number): Promise<OutletAggregate> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const outlet = outletsData.find(outlet => outlet.id === outletId);

                let outletWithProducts;
                if (outlet) {
                    const products = outletProducts[outletId] || null;
                    outletWithProducts = {...outlet, products: products}
                } else {
                    outletWithProducts = null;
                }

                resolve({outlet: outletWithProducts, cart: cart});
            }, 1500);
        });
    }
}