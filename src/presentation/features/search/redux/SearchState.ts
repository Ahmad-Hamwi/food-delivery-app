import {State} from "../../../redux/State";
import {OutletModel} from "../../../../infrastructure/models/OutletModel";

export interface SearchState extends State<OutletModel[] | null> {
}

export const initialSearchState: State<OutletModel[] | null> = {
    data: null,
    loading: false,
    error: null,
}