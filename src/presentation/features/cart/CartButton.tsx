import HorizontalDivider from "../../components/HorizontalDivider";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FC} from "react";
import {CartModel} from "../../../infrastructure/models/CartModel";

type Props = {
    cart: CartModel;
    onPress: () => void;
}

const CartButton: FC<Props> = ({cart, onPress}) => {
    return <View>
        <HorizontalDivider/>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Checkout</Text>
                <View style={{flex: 1}}/>
                <Text style={styles.text}>
                    {cart.items.reduce((total, item) => total + item.quantity, 0)} Items for {cart.subTotal} AED
                </Text>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 16,
        backgroundColor: "#e85589",
        borderRadius: 8,
        margin: 16,
        flexDirection: "row",
        alignContent: "space-between",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})

export default CartButton;