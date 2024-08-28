import {StyleSheet, Text, View} from "react-native";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {FC} from "react";

type Props = StyledComponentProps & {
    name: string;
    value: string;
}

const CheckoutSummaryItem: FC<Props> = ({style, name, value}) => {
    return <View style={[style, styles.root]}>
        <Text style={styles.name}>{name}</Text>
        <View style={{flex: 1}}/>
        <Text style={styles.value}>{value}</Text>
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
    value: {
        fontSize: 18,
    }
});

export default CheckoutSummaryItem;