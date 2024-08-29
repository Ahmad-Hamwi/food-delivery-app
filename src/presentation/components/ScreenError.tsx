import {FC} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StyledComponentProps} from "./StyledComponentProps";

type Props = StyledComponentProps & {
    error: Error | null;
    onTryAgain?: () => void | undefined;
}

const ScreenError: FC<Props> = ({style, error, onTryAgain}) => {
    return (
        <View style={[style, styles.root]}>
            <Text>{error?.message ?? "Something went wrong"}</Text>
            {
                onTryAgain &&
                <TouchableOpacity onPress={onTryAgain}>
                    <Text style={styles.tryAgain}>Try again</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tryAgain: {
        color: "blue",
    }
});

export default ScreenError;