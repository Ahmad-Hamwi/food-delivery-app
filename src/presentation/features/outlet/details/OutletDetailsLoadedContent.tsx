import {StyledComponentProps} from "../../../components/StyledComponentProps";
import {FC} from "react";
import {OutletModel} from "../../../../infrastructure/models/OutletModel";
import OutletHeadingInfo from "./OutletHeadingInfo";
import ProductItem from "../../product/ProductItem";
import ProductCounter from "../../product/ProductCounter";
import {FlatList, StyleSheet} from "react-native";

type Props = StyledComponentProps & {
    outlet: OutletModel,
}

const OutletDetailsLoadedContent: FC<Props> = ({style, outlet}) => {
    return <FlatList
        style={style}
        ListHeaderComponent={<OutletHeadingInfo/>}
        data={outlet.products}
        renderItem={({item}) => <ProductItem
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
}

const styles = StyleSheet.create({
    counter: {
        marginStart: "auto"
    }
})

export default OutletDetailsLoadedContent