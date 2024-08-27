import {carouselData, CarouselModel} from "../models/CarousalModel";
import {RestaurantModel, restaurantsData} from "../models/RestaurantModel";

export interface HomeAggregate {
    carousalData: CarouselModel[],
    restaurants: RestaurantModel[],
}

export const homeData: HomeAggregate = {
    carousalData: carouselData,
    restaurants: restaurantsData,
}