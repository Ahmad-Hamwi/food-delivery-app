import {FC} from "react";
import {StyledComponentProps} from "./StyledComponentProps";
import {ActivityIndicator, StyleSheet, View} from "react-native";

const HomeContentLoading: FC<StyledComponentProps> = ({style}) => {
    return (
        <View style={[style, styles.root]}>
            <ActivityIndicator/>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeContentLoading;