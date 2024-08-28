import HorizontalDivider from "../../../components/HorizontalDivider";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const CartButton = () => {
    return <View>
        <HorizontalDivider/>
        <TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Checkout</Text>
                <View style={{flex: 1}}/>
                <Text style={styles.text}>3 items for 45 AED total</Text>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 16,
        backgroundColor: '#e3e3e3',
        borderRadius: 16,
        margin: 16,
        flexDirection: "row",
        alignContent: "space-between",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default CartButton;