import {StyleSheet} from "react-native";
import HomeContent from "./HomeContent";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {fetchHomeData} from "./redux/HomeAsyncThunks";
import {FC, useEffect} from "react";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {HomeState} from "./redux/HomeState";
import SearchBar from "./SearchBar";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch<AppDispatch>();
    const homeState: HomeState = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.root}>
            <SearchBar
                actAsButton
                onPress={() => navigation.navigate('Search')}
            />
            <HomeContent
                style={styles.content}
                state={homeState}
                onOutletPressed={(outlet) => navigation.navigate('OutletDetails', {outletId: outlet.id})}
                onRetry={() => dispatch(fetchHomeData())}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        root: {flex: 1},
        content: {flex: 1}
    }
)

export default HomeScreen;