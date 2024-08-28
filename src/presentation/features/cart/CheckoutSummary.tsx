import {StyleSheet, View} from "react-native";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {FC} from "react";
import CheckoutSummaryItem from "./CheckoutSummaryItem";

type Props = StyledComponentProps & {
    subTotal: number;
    tax: number;
    total: number;
}

const CheckoutSummary: FC<Props> = ({style, tax, total, subTotal}) => {
    return <View style={style}>
        <CheckoutSummaryItem style={styles.item} name={"Subtotal"} value={subTotal.toString() + " AED"}/>
        <CheckoutSummaryItem style={styles.item} name={"tax"} value={tax.toString() + " AED"}/>
        <CheckoutSummaryItem style={styles.item} name={"Total"} value={total.toString() + " AED"}/>
    </View>
}

const styles = StyleSheet.create({
    item: {
        paddingVertical: 4,
    }
});

export default CheckoutSummary;