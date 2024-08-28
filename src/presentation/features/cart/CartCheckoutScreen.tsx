import {ScrollView, StyleSheet, Text, View} from "react-native";
import {FC} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {SafeAreaView} from "react-native-safe-area-context";
import {outletProducts} from "../../../infrastructure/models/OutletProductModel";
import ProductItem from "../product/ProductItem";
import PaymentMethod from "./PaymentMethod";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutPlaceOrderButton from "./CheckoutPlaceOrderButton";
import HorizontalDivider from "../../components/HorizontalDivider";

type Props = NativeStackScreenProps<RootStackParamList, "Checkout">

const CartCheckoutScreen: FC<Props> = ({navigation}) => {
    return <SafeAreaView style={styles.root}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{height: 16}}/>
            <Text style={styles.title}>Basket - The Gourmet Bistro</Text>
            {outletProducts[1].map(item => <ProductItem style={styles.productItem} key={item.id} product={item}/>)}
            <View style={{height: 16}}/>
            <View style={{flex: 1}}/>
            <Text style={styles.title}>Payment method</Text>
            <PaymentMethod style={styles.paymentMethod} isChecked={true} onCheckChanged={() => {
            }}/>
            <View style={{height: 16}}/>
            <Text style={styles.title}>Summary</Text>
            <CheckoutSummary style={styles.summary}/>
            <View style={{height: 16}}/>
        </ScrollView>
        <CheckoutPlaceOrderButton onPress={() => {navigation.navigate("OrderPlaced")}}/>
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