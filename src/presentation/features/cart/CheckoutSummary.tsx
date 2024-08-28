import {StyleSheet, View} from "react-native";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {FC} from "react";
import CheckoutSummaryItem from "./CheckoutSummaryItem";

type Props = StyledComponentProps & {}

const CheckoutSummary: FC<Props> = ({style}) => {
    return <View style={style}>
        <CheckoutSummaryItem style={styles.item} name={"Subtotal"} value={"120 AED"}/>
        <CheckoutSummaryItem style={styles.item} name={"tax"} value={"5.54 AED"}/>
        <CheckoutSummaryItem style={styles.item} name={"Total"} value={"125.54 AED"}/>
    </View>
}

const styles = StyleSheet.create({
    item: {
        paddingVertical: 4,
    }
});

export default CheckoutSummary;