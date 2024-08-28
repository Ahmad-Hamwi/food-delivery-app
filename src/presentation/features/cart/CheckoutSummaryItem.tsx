import {StyleSheet, Text, View} from "react-native";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {FC} from "react";

type Props = StyledComponentProps & {
    name: string;
    value: string;
    prominent?: boolean;
}

const CheckoutSummaryItem: FC<Props> = ({style, name, value, prominent = false}) => {
    return <View style={[style, styles.root]}>
        <Text style={prominent ? styles.prominent : styles.name}>{name}</Text>
        <View style={{flex: 1}}/>
        <Text style={prominent ? styles.prominent : styles.value}>{value}</Text>
    </View>;
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    prominent: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#e85589",
    },
    value: {
        fontSize: 18,
    }
});

export default CheckoutSummaryItem;