import {StyleSheet, Text, View} from "react-native";
import {FC} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import LottieView from "lottie-react-native";
import BackToHomeButton from "./BackToHomeButton";

type Props = NativeStackScreenProps<RootStackParamList, "OrderPlaced">

const OrderPlacedScreen: FC<Props> = ({navigation}) => {
    return <View style={styles.root}>
        <View style={{flex: 1}}/>
        <LottieView style={styles.animation} autoPlay={true} loop={false} source={require('../../../../assets/checkmark.json')}/>
        <Text style={styles.text}>Order placed</Text>
        <Text style={styles.description}>Your order is on its way</Text>
        <View style={{flex: 1}}/>
        <BackToHomeButton onPress={() => navigation.popToTop()}/>
    </View>
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    animation: {
        width: 200,
        height: 200,
        alignSelf: "center"
    },
    text: {
        marginTop: 32,
        marginBottom: 8,
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center"
    },
    description: {
        fontSize: 20,
        alignSelf: "center"
    }
})

export default OrderPlacedScreen;