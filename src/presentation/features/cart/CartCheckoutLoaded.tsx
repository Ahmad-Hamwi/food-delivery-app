import {ScrollView, StyleSheet, Text, View} from "react-native";
import {FC} from "react";
import ProductItem from "../product/ProductItem";
import PaymentMethod from "./PaymentMethod";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutPlaceOrderButton from "./CheckoutPlaceOrderButton";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {CartModel} from "../../../infrastructure/models/CartModel";

type Props = StyledComponentProps & {
    cart: CartModel,
    onPlaceOrder: () => void;
}

const CartCheckoutLoaded: FC<Props> = ({style, cart, onPlaceOrder}) => {
    return <View style={style}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{height: 16}}/>
            <Text style={styles.title}>Basket - {cart.outlet.title}</Text>
            {cart.items.map(item =>
                <ProductItem
                    style={styles.productItem}
                    key={item.product.id}
                    product={item.product}
                />
            )}
            <View style={{height: 16}}/>
            <View style={{flex: 1}}/>
            <Text style={styles.title}>Payment method</Text>
            <PaymentMethod
                style={styles.paymentMethod}
                isChecked={cart.selectedPaymentMethod === "cash"}
                onCheckChanged={() => {
                }}
            />
            <View style={{height: 16}}/>
            <Text style={styles.title}>Summary</Text>
            <CheckoutSummary style={styles.summary} subTotal={cart.subTotal} tax={cart.tax} total={cart.total}/>
            <View style={{height: 16}}/>
        </ScrollView>
        <CheckoutPlaceOrderButton onPress={onPlaceOrder}/>
    </View>
}

const styles = StyleSheet.create({
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

export default CartCheckoutLoaded;