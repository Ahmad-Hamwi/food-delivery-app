import {HomeAggregate} from "../../../../infrastructure/aggregates/HomeAggregate";
import {State} from "../../../redux/State";

export interface HomeState extends State<HomeAggregate | null> {
}

