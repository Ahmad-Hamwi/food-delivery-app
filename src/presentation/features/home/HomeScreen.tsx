import {StyleSheet} from "react-native";
import HomeContent from "./HomeContent";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchHomeData} from "./redux/HomeAsyncThunks";
import {FC, useEffect} from "react";
import HomeToolbar from "./HomeToolbar";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch<AppDispatch>();
    const homeState = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.root}>
            <HomeToolbar
                style={styles.toolbar}
                onPress={() => {
                }}
            />
            <HomeContent
                style={styles.content}
                state={homeState}
                onOutletPressed={(outlet) => navigation.navigate('OutletDetails', {outletId: outlet.id})}
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

export default HomeScreen;