import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../features/home/HomeScreen";

const Stack = createNativeStackNavigator();

// A workaround background coloring gets corrupted when adding navigation
const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

const AppNavigation = () => {
    return (
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    children={() => <HomeScreen/>}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;