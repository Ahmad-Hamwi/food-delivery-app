import {ScrollView, StyleSheet, Text, View} from "react-native";
import React, {FC} from "react";
import ProductItem from "../product/ProductItem";
import PaymentMethod from "./PaymentMethod";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutPlaceOrderButton from "./CheckoutPlaceOrderButton";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {CartModel} from "../../../infrastructure/models/CartModel";
import CheckoutToolbar from "./CheckoutToolbar";

type Props = StyledComponentProps & {
    cart: CartModel,
    subLoading: boolean,
    onPaymentMethodChanged: (paymentMethod: "cash" | null) => void,
    onPlaceOrder: () => void;
}

const CartCheckoutLoaded: FC<Props> = ({style, cart, subLoading, onPaymentMethodChanged, onPlaceOrder}) => {
    return <View style={style}>
        <CheckoutToolbar outletName={cart.outlet.title}/>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{height: 16}}/>
            <Text style={styles.title}>Basket</Text>
            {cart.items.map(item =>
                <ProductItem
                    style={styles.productItem}
                    key={item.product.id}
                    product={item.product}
                    trailingContent={
                        <Text style={styles.quantity}>x{item.quantity}</Text>
                    }
                />
            )}
            <View style={{height: 16}}/>
            <View style={{flex: 1}}/>
            <Text style={styles.title}>Payment method</Text>
            <PaymentMethod
                style={styles.paymentMethod}
                isChecked={cart.selectedPaymentMethod === "cash"}
                onCheckChanged={(isChecked) => {
                    onPaymentMethodChanged(isChecked ? "cash" : null)
                }}
                allowClick={!subLoading}
            />
            <View style={{height: 16}}/>
            <Text style={styles.title}>Summary</Text>
            <CheckoutSummary style={styles.summary} subTotal={cart.subTotal} tax={cart.tax} total={cart.total}/>
            <View style={{height: 16}}/>
        </ScrollView>
        <CheckoutPlaceOrderButton
            isLoading={subLoading}
            onPress={onPlaceOrder}
            isDisabled={cart.selectedPaymentMethod === null}
        />
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
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        marginStart: "auto",
        backgroundColor: '#e3e3e3',
        borderRadius: 4,
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