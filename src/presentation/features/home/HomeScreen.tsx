import {StyleSheet} from "react-native";
import HomeSearchBar from "./HomeSearchBar";
import HomeContent from "./HomeContent";
import {SafeAreaView} from "react-native-safe-area-context";
import HorizontalDivider from "../../components/HorizontalDivider";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchHomeData} from "./redux/HomeAsyncThunks";
import {useEffect} from "react";

export default function HomeScreen() {
    const dispatch = useDispatch<AppDispatch>();
    const homeState = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    return (
        <SafeAreaView>
            <HomeSearchBar
                style={styles.toolbar}
                onPress={() => {
                }}
            />
            <HorizontalDivider/>
            <HomeContent
                style={styles.content}
                state={homeState}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        toolbar: {
            marginHorizontal: 16,
            marginVertical: 16,
        },
        content: {
            flex: 1,
        }
    }
)