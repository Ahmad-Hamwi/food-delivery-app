import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {FC} from "react";

type Props = StyledComponentProps & {
    productId: number;
    outletId: number;
}

const ProductCounter: FC<Props> = ({style}) => {
    return <View style={[style, styles.root]}>
        <TouchableOpacity style={styles.section}>
            <Text style={styles.text}>-</Text>
        </TouchableOpacity>

        <Text style={[styles.section, styles.text]}>0</Text>

        <TouchableOpacity style={styles.section}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        width: 150,
        backgroundColor: '#e3e3e3',
        borderRadius: 8
    },
    section: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    }
})

export default ProductCounter;