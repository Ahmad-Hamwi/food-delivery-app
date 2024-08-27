import {StyleSheet} from "react-native";
import HomeContent from "./HomeContent";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchHomeData} from "./redux/HomeAsyncThunks";
import {useEffect} from "react";
import HomeToolbar from "./HomeToolbar";

export default function HomeScreen() {
    const dispatch = useDispatch<AppDispatch>();
    const homeState = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.root}>
            <HomeToolbar
                style={styles.toolbar}
                onPress={() => {}}
            />
            <HomeContent
                style={styles.content}
                state={homeState}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        root: {
            width: "100%",
            height: "100%",
        },
        toolbar: {
            flex: 0,
        },
        content: {
            flex: 1,
        }
    }
)