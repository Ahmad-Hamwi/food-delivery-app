import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../features/home/HomeScreen";
import OutletDetailsScreen from "../features/outlet/details/OutletDetailsScreen";
import CheckoutScreen from "../features/cart/CartCheckoutScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    Home: undefined;
    OutletDetails: { outletId: number; };
    Checkout: undefined;
};

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="OutletDetails" component={OutletDetailsScreen}/>
                <Stack.Screen name="Checkout" component={CheckoutScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;