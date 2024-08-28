import {FC, useEffect} from "react";
import {StyleSheet, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/AppNavigation";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {fetchOutletDetails} from "./redux/OutletAsyncThunks";
import StateHandler from "../../../components/StateHandler";
import {OutletState} from "./redux/OutletState";
import OutletDetailsLoadedContent from "./OutletDetailsLoadedContent";
import {CartState} from "../../cart/redux/CartState";

type Props = NativeStackScreenProps<RootStackParamList, "OutletDetails">

const OutletDetailsScreen: FC<Props> = ({route, navigation}) => {
    const outletId = route.params.outletId

    const dispatch = useDispatch<AppDispatch>();
    const outletState: OutletState = useSelector((state: RootState) => state.outlet);
    const cartState: CartState = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        dispatch(fetchOutletDetails(outletId));
    }, [dispatch, outletId]);

    return (
        <SafeAreaView style={styles.root}>
            <StateHandler
                style={styles.content}
                state={outletState}
                loadedComponent={(style, data) =>
                    <OutletDetailsLoadedContent
                        style={style}
                        outlet={data}
                        cart={cartState.data ? cartState.data : null}
                        onCartPressed={() => navigation.navigate("Checkout")}
                    />
                }
                emptyDataComponent={(style) => <Text>Outlet not found</Text>}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
    },
    content: {
        flex: 1,
    },
});

export default OutletDetailsScreen;