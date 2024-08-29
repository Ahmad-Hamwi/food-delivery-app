import {StyledComponentProps} from "../../components/StyledComponentProps";
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HorizontalDivider from "../../components/HorizontalDivider";

type Props = StyledComponentProps & {
    outletName: string,
}

const CheckoutToolbar: FC<Props> = ({style, outletName}) => {
    return <View style={style}>
        <View style={styles.container}>
            <Text style={styles.title} numberOfLines={1}>Checkout: {outletName}</Text>
        </View>
        <HorizontalDivider/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 24,
    },
    back: {
        alignSelf: "center",
        marginEnd: 8,
        backgroundColor: '#e3e3e3',
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        paddingStart: 48,
    },
});

export default CheckoutToolbar;
