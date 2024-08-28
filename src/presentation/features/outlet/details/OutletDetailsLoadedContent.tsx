import {StyledComponentProps} from "../../../components/StyledComponentProps";
import {FC} from "react";
import {OutletModel} from "../../../../infrastructure/models/OutletModel";
import OutletHeadingInfo from "./OutletHeadingInfo";
import ProductItem from "../../product/ProductItem";
import ProductCounter from "../../product/ProductCounter";
import {FlatList, StyleSheet, View} from "react-native";
import CartButton from "../../cart/CartButton";

type Props = StyledComponentProps & {
    outlet: OutletModel,
    onCartPressed: () => void;
}

const OutletDetailsLoadedContent: FC<Props> = ({style, outlet, onCartPressed}) => {
    return <View style={style}>
        <FlatList
            ListHeaderComponent={<OutletHeadingInfo/>}
            data={outlet.products}
            renderItem={({item}) => <ProductItem
                style={styles.productItem}
                product={item}
                trailingContent={
                    <ProductCounter
                        style={styles.counter}
                        productId={item.id}
                        outletId={item.outletId}
                    />
                }/>
            }
        />
        <CartButton onPress={onCartPressed}/>
    </View>
}

const styles = StyleSheet.create({
    productItem: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    counter: {
        marginStart: "auto"
    },
})

export default OutletDetailsLoadedContent