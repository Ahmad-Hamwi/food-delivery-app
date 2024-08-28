import { container } from 'tsyringe';
import {HomeApi, IHomeApi} from "../infrastructure/apis/home/HomeApi";
import {IOutletApi, OutletApi} from "../infrastructure/apis/outlet/OutletApi";
import {CartApi, ICartApi} from "../infrastructure/apis/cart/CartApi";

container.register<IHomeApi>('IHomeApi', {
    useClass: HomeApi
});

container.register<IOutletApi>('IOutletApi', {
    useClass: OutletApi
});

container.register<ICartApi>('ICartApi', {
    useClass: CartApi
});