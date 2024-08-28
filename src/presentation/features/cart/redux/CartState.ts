import {State} from "../../../redux/State";
import {CartModel} from "../../../../infrastructure/models/CartModel";

export interface CartState extends State<CartModel | null> {
}
