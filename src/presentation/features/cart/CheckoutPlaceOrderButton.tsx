import HorizontalDivider from "../../components/HorizontalDivider";
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FC} from "react";

type Props = {
    onPress: () => void;
    isLoading: boolean;
    isDisabled: boolean;
}

const CheckoutPlaceOrderButton: FC<Props> = ({onPress, isLoading, isDisabled}) => {
    return <View>
        <HorizontalDivider/>
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, isDisabled && styles.disabledContainer]}>
                {
                    isLoading
                        ? <ActivityIndicator style={styles.indicator} color={"white"}/>
                        : <Text style={styles.text}>Place order</Text>
                }

            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        padding: 16,
        backgroundColor: "#e85589",
        borderRadius: 8,
        margin: 16,
        flexDirection: "row",
    },
    disabledContainer: {
        backgroundColor: "#bdbdbd"
    },
    indicator: {
        flex: 1,
        alignSelf: "center"
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