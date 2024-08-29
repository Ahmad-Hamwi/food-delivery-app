import {FlatList, StyleSheet, View, Text} from "react-native";
import ImageCarousel from "./ImageCarousel";
import OutletItem from "../outlet/item/OutletItem";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {FC} from "react";
import {HomeState} from "./redux/HomeState";
import StateHandler from "../../components/StateHandler";
import {OutletModel} from "../../../infrastructure/models/OutletModel";

type Props = StyledComponentProps & {
    state: HomeState
    onOutletPressed: (outlet: OutletModel) => void;
    onRetry: () => void;
}

const HomeContent: FC<Props> = ({style, state, onOutletPressed, onRetry}) => {

    return (
        // @ts-ignore
        <StateHandler
            style={style}
            state={state}
            loadedComponent={(style, data) => (
                <FlatList
                    style={style}
                    data={data.restaurants}
                    ListHeaderComponent={
                        <View>
                            <Text style={styles.title}>Top offers 🔥</Text>
                            <ImageCarousel carousalData={data.carousalData}/>
                            <View style={styles.space}/>
                            <Text style={styles.title}>Restaurants near you 📍</Text>
                        </View>
                    }
                    renderItem={({item}) => (
                        <OutletItem
                            style={styles.item}
                            restaurant={item}
                            onPress={() => onOutletPressed(item)}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            )}
            onErrorRetry={onRetry}
        />
    );
}

const styles = StyleSheet.create(
    {
        space: {
            height: 16
        },
        item: {
            marginHorizontal: 16,
            marginBottom: 16,
        },
        title: {
            paddingHorizontal: 16,
            fontSize: 24,
            fontWeight: 'bold',
            paddingVertical: 16,
        },
    }
)

export default HomeContent;