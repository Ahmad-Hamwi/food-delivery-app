import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {FC, useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import SearchBar from "../home/SearchBar";
import OutletItem from "../outlet/item/OutletItem";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {SearchState} from "./redux/SearchState";
import {fetchOutlets} from "../outlet/details/redux/OutletAsyncThunks";
import StateHandler from "../../components/StateHandler";
import {initializeSearch} from "./redux/SearchReducer";

type Props = NativeStackScreenProps<RootStackParamList, "Search">

const SearchScreen: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch<AppDispatch>();
    const searchState: SearchState = useSelector((state: RootState) => state.search);

    const [query, setQuery] = useState("")

    useEffect(() => {
        dispatch(initializeSearch())
    }, []);

    useEffect(() => {
        if (query === "") return;

        const handler = setTimeout(() => {
            dispatch(fetchOutlets(query))
        }, 700);

        return () => clearTimeout(handler);
    }, [query]);

    return <SafeAreaView style={styles.root}>
        <SearchBar
            showBackButton
            onTextInput={(q) => setQuery(q)}
            value={query}
        />
        <StateHandler
            style={{flex: 1}}
            state={searchState}
            loadedComponent={(style, data) =>
                <FlatList
                    style={style}
                    contentContainerStyle={styles.list}
                    data={data}
                    renderItem={({item}) => (
                        <OutletItem
                            style={styles.item}
                            restaurant={item}
                            onPress={() => navigation.navigate("OutletDetails", {outletId: item.id})}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            }
            emptyDataComponent={(style) => {
                return <View style={style}>
                    <Text style={styles.emptyText}>No results yet</Text>
                </View>
            }}
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
    },
    emptyText: {
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
    }
})

export default SearchScreen;