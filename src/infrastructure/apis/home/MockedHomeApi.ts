import {HomeAggregate, homeData} from "../../aggregates/HomeAggregate";

export interface IHomeApi {
    getHomeData(): Promise<HomeAggregate>;
}

export class MockedHomeApi implements IHomeApi {
    getHomeData(): Promise<HomeAggregate> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(homeData), 1000);
        });
    }
}