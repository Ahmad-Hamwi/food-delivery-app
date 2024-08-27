import {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {StyledComponentProps} from "./StyledComponentProps";

type Props = StyledComponentProps

const ScreenEmpty: FC<Props> = ({style}) => {
    return (
        <View style={[style, styles.root]}>
            <Text>No data to show here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ScreenEmpty;