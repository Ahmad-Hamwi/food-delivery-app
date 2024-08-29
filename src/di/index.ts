import { container } from 'tsyringe';
import {MockedHomeApi, IHomeApi} from "../infrastructure/apis/home/MockedHomeApi";
import {IOutletApi, MockedOutletApi} from "../infrastructure/apis/outlet/MockedOutletApi";
import {MockedCartApi, ICartApi} from "../infrastructure/apis/cart/MockedCartApi";

container.register<IHomeApi>('IHomeApi', {
    useClass: MockedHomeApi
});

container.register<IOutletApi>('IOutletApi', {
    useClass: MockedOutletApi
});

container.register<ICartApi>('ICartApi', {
    useClass: MockedCartApi
});