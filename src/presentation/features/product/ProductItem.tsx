import {StyledComponentProps} from "../../components/StyledComponentProps";
import {OutletProductModel} from "../../../infrastructure/models/OutletProductModel";
import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";

type Props = StyledComponentProps & {
    product: OutletProductModel
    trailingContent?: React.ReactNode
}

const ProductItem: FC<Props> = ({style, product, trailingContent}) => {
    return <View style={[style, styles.root]}>
        <View style={styles.image}/>
        <View style={styles.space}/>
        <View style={styles.verticalRoot}>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>{product.price} AED</Text>
            </View>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.blankSpace}/>
            {trailingContent}
        </View>
    </View>;
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
    },
    image: {
        width: 100,
        height: 112,
        backgroundColor: '#e3e3e3',
        borderRadius: 8,
    },
    space: {
        width: 8,
    },
    verticalRoot: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },
    description: {},
    price: {
        marginStart: "auto",
        fontWeight: 'bold',
        fontSize: 20,
    },
    blankSpace: {
        flex: 1,
    }
})

export default ProductItem;
