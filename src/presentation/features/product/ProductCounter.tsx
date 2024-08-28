import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {ProductCountersState} from "./redux/ProductCountersState";
import {decrementProductQuantity, incrementProductQuantity} from "./redux/ProductCountersAsyncThunks";

type Props = StyledComponentProps & {
    productId: number;
    outletId: number;
    value: number;
}

const ProductCounter: FC<Props> = ({style, productId, value}) => {
    const dispatch = useDispatch<AppDispatch>();
    const productCountersState: ProductCountersState = useSelector((state: RootState) => state.productCounters);


    const handleIncrementClick = () => {
        if (!productCountersState.data?.find(i => i.productId === productId)?.isLoading) {
            dispatch(incrementProductQuantity(productId))
        }
    }

    const handleDecrementClick = () => {
        if (!productCountersState.data?.find(i => i.productId === productId)?.isLoading) {
            if (value !== 0) {
                dispatch(decrementProductQuantity(productId))
            }
        }
    }

    return <View style={[style, styles.root]}>
        <TouchableOpacity style={styles.section} onPress={handleDecrementClick}>
            <Text style={styles.text}>-</Text>
        </TouchableOpacity>

        {
            productCountersState.data?.find(i => i.productId === productId)?.isLoading ?
                <ActivityIndicator style={styles.section} color={"#e85589"}/> :
                <Text style={[styles.section, styles.text]}>{value.toString()}</Text>
        }

        <TouchableOpacity style={styles.section} onPress={handleIncrementClick}>
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