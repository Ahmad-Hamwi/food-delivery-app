import {carouselData, CarouselModel} from "../models/CarousalModel";
import {OutletModel, restaurantsData} from "../models/OutletModel";

export interface HomeAggregate {
    carousalData: CarouselModel[],
    restaurants: OutletModel[],
}

export const homeData: HomeAggregate = {
    carousalData: carouselData,
    restaurants: restaurantsData,
}