import {StyleSheet} from "react-native";
import {FC, useEffect} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {CartState} from "./redux/CartState";
import {fetchCart} from "./redux/CartAsyncThunks";
import CartCheckoutLoaded from "./CartCheckoutLoaded";
import StateHandler from "../../components/StateHandler";

type Props = NativeStackScreenProps<RootStackParamList, "Checkout">

const CartCheckoutScreen: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch<AppDispatch>();
    const cartState: CartState = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    return <SafeAreaView>
        <StateHandler style={styles.root} state={cartState} loadedComponent={(style, data) =>
            <CartCheckoutLoaded
                style={style}
                cart={data}
                onPlaceOrder={() => navigation.navigate("OrderPlaced")}
            />
        }/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
    },
    title: {
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 8,
    },
    productItem: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    paymentMethod: {
        paddingHorizontal: 16,
    },
    summary: {
        paddingHorizontal: 16,
    }
});

export default CartCheckoutScreen;