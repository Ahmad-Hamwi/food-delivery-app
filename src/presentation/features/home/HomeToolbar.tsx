import HomeSearchBar from "./HomeSearchBar";
import HorizontalDivider from "../../components/HorizontalDivider";
import {StyleSheet, View} from "react-native";
import {StyledComponentProps} from "../../components/StyledComponentProps";
import {FC} from "react";

type HomeToolbarProps = StyledComponentProps & {
    onPress: () => void;
}

const HomeToolbar: FC<HomeToolbarProps> = ({style, onPress}) => {
    return (
        <View style={style}>
            <HomeSearchBar
                style={styles.search}
                onPress={onPress}
            />
            <HorizontalDivider/>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        marginHorizontal: 16,
        marginVertical: 16,
    },
})

export default HomeToolbar;