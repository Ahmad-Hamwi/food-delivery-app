import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../features/home/HomeScreen";
import OutletDetailsScreen from "../features/outlet/details/OutletDetailsScreen";
import CheckoutScreen from "../features/cart/CartCheckoutScreen";
import OrderPlacedScreen from "../features/order/OrderPlacedScreen";
import SearchScreen from "../features/search/SearchScreen";
import {StatusBar} from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    Home: undefined;
    OutletDetails: { outletId: number; };
    Checkout: undefined;
    OrderPlaced: undefined;
    Search: { searchQuery: string } | undefined;
};

const AppNavigation = () => {
    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={"#f2f2f2"}
            />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{headerShown: false, navigationBarColor: "#f2f2f2"}}
                    initialRouteName="Home"
                >
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="OutletDetails" component={OutletDetailsScreen}/>
                    <Stack.Screen name="Checkout" component={CheckoutScreen}/>
                    <Stack.Screen name="OrderPlaced" component={OrderPlacedScreen}/>
                    <Stack.Screen name="Search" component={SearchScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation;