import {View, Text, StyleSheet} from "react-native";
import React, {FC} from "react";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {Checkbox} from 'react-native-paper';

type Props = StyledComponentProps & {
    isChecked: boolean;
    onCheckChanged: (isChecked: boolean) => void;
}

const PaymentMethod: FC<Props> = ({style, isChecked, onCheckChanged}) => {
    return <View style={[style, styles.root]}>
        <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => onCheckChanged(!isChecked)}
        />
        <Text style={styles.text}>Cash</Text>
    </View>
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default PaymentMethod;