import {FlatList, StyleSheet, View} from "react-native";
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
}

const HomeContent: FC<Props> = ({style, state, onOutletPressed}) => {

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
                            <ImageCarousel carousalData={data.carousalData}/>
                            <View style={styles.space}/>
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
        }
    }
)

export default HomeContent;