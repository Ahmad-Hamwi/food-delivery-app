import {FC} from "react";
import {FlatList, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {outletProducts} from "../../../../infrastructure/models/OutletProductModel";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/AppNavigation";
import ProductItem from "../../product/ProductItem";
import OutletHeadingInfo from "./OutletHeadingInfo";

type Props = NativeStackScreenProps<RootStackParamList, "OutletDetails">

const OutletDetailsScreen: FC<Props> = ({route, navigation}) => {
    const outletId = route.params.outletId

    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                ListHeaderComponent={<OutletHeadingInfo/>}
                data={outletProducts[outletId]}
                renderItem={({item}) => <ProductItem product={item}/>}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
    },
});

export default OutletDetailsScreen;