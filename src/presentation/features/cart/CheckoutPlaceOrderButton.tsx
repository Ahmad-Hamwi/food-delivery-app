import HorizontalDivider from "../../components/HorizontalDivider";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FC} from "react";

type Props = {
    onPress: () => void;
}

const CheckoutPlaceOrderButton: FC<Props> = ({onPress}) => {
    return <View>
        <HorizontalDivider/>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Place order</Text>
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
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
})

export default CheckoutPlaceOrderButton;