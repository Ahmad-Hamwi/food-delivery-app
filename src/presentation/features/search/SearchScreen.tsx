import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {FlatList, StyleSheet} from "react-native";
import {FC, useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import SearchBar from "../home/SearchBar";
import OutletItem from "../outlet/item/OutletItem";
import {outletsData} from "../../../infrastructure/models/OutletModel";

type Props = NativeStackScreenProps<RootStackParamList, "Search">

const SearchScreen: FC<Props> = ({navigation}) => {
    const [query, setQuery] = useState("")

    useEffect(() => {
        const handler = setTimeout(() => console.log(query), 700);

        return () => clearTimeout(handler);
    }, [query]);

    return <SafeAreaView style={styles.root}>
        <SearchBar
            onTextInput={(q) => setQuery(q)}
            value={query}
        />
        <FlatList
            contentContainerStyle={styles.list}
            data={outletsData}
            renderItem={({item}) => (
                <OutletItem
                    style={styles.item}
                    restaurant={item}
                    onPress={() => navigation.navigate("OutletDetails", {outletId: item.id})}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
    },
    list: {
        paddingTop: 16,
    },
    item: {
        marginHorizontal: 16,
        marginBottom: 16,
    }
})

export default SearchScreen;