import {FlatList, StyleSheet, Text} from "react-native";
import {FC} from "react";
import OutletItem from "../outlet/item/OutletItem";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {OutletModel} from "../../../infrastructure/models/OutletModel";

type Props = StyledComponentProps & {
    outlets: OutletModel[];
    onOutletClicked: (outlet: OutletModel) => void;
}

const ScreenContentLoaded: FC<Props> = ({style, outlets, onOutletClicked}) => {
    return <>
        {
            outlets.length !== 0
                ? <FlatList
                    style={style}
                    contentContainerStyle={styles.list}
                    data={outlets}
                    renderItem={({item}) => (
                        <OutletItem
                            style={styles.item}
                            restaurant={item}
                            onPress={() => onOutletClicked(item)}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
                : <Text style={styles.emptyText}>No results, try a new search</Text>}
    </>
}

const styles = StyleSheet.create({
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

export default ScreenContentLoaded;