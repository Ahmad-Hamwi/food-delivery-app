import {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {StyledComponentProps} from "./StyledComponentProps";

type Props = StyledComponentProps & {
    error: Error | null
}

const ScreenError: FC<Props> = ({style, error}) => {
    return (
        <View style={[style, styles.root]}>
            <Text>{error?.message ?? "Something went wrong"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ScreenError;