import HorizontalDivider from "../../components/HorizontalDivider";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FC} from "react";

type Props = {
    onPress: () => void;
}

const BackToHomeButton: FC<Props> = ({onPress}) => {
    return <View>
        <HorizontalDivider/>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Back to home</Text>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 16,
        backgroundColor: '#e3e3e3',
        borderRadius: 16,
        margin: 16,
        flexDirection: "row",
        alignContent: "space-between",
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    }
})

export default BackToHomeButton;