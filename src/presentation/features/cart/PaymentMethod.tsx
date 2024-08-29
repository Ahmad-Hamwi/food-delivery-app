import {View, Text, StyleSheet} from "react-native";
import React, {FC, useState} from "react";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {Checkbox} from 'react-native-paper';

type Props = StyledComponentProps & {
    isChecked: boolean;
    onCheckChanged: (isChecked: boolean) => void;
    allowClick: boolean,
}

const PaymentMethod: FC<Props> = ({style, isChecked, onCheckChanged, allowClick = true}) => {
    const [internalIsChecked, setInternalIsChecked] = useState(isChecked);

    return <View style={[style, styles.root]}>
        <Checkbox
            color={"#e85589"}
            status={internalIsChecked ? 'checked' : 'unchecked'}
            onPress={() => {
                if (allowClick) {
                    setInternalIsChecked(!isChecked);
                    onCheckChanged(!isChecked)
                }
            }}
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