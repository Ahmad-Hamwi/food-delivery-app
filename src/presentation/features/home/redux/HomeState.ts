import {HomeAggregate} from "../../../../infrastructure/aggregates/HomeAggregate";

export interface State<Model> {
    data: Model | null;
    loading: boolean;
    error: Error | null;
}

export function initialState<Model>(): State<Model> {
    return {
        data: null,
        loading: false,
        error: null,
    }
}

export interface HomeState extends State<HomeAggregate> {
}

