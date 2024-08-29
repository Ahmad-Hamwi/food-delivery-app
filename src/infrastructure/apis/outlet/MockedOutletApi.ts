import {OutletModel, outletsData} from "../../models/OutletModel";
import {outletProducts} from "../../models/OutletProductModel";
import {OutletAggregate} from "../../aggregates/OutletAggregate";
import {cart} from "../../models/CartModel";

export interface IOutletApi {
    getOutletDetails(outletId: number): Promise<OutletAggregate>;

    getOutlets(query: string): Promise<OutletModel[] | null>;
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

    getOutlets(query: string): Promise<OutletModel[] | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (query === "") {
                    resolve(null)
                    return
                }

                resolve(
                    outletsData.filter(
                        outlet =>
                            outlet.title.toLowerCase().includes(query.toLowerCase()) ||
                            outlet.description.toLowerCase().includes(query.toLowerCase())
                    )
                );
            }, 1000)
        })
    }
}