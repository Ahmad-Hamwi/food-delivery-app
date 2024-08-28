import {OutletModel, outletsData} from "../../models/OutletModel";
import {outletProducts} from "../../models/OutletProductModel";

export interface IOutletApi {
    getOutletDetails(outletId: number): Promise<OutletModel | null>;
}

export class OutletApi implements IOutletApi {
    getOutletDetails(outletId: number): Promise<OutletModel | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const outlet = outletsData.find(outlet => outlet.id === outletId);

                if (outlet) {
                    const products = outletProducts[outletId] || null;

                    resolve({...outlet, products: products})
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}