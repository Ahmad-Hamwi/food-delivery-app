import {StyleSheet, TouchableOpacity, View} from "react-native";
import React, {FC} from "react";
import {StyledComponentProps} from "../../../components/StyledComponentProps";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

type Props = StyledComponentProps & {
    withBorder?: boolean,
}

const BackButton: FC<Props> = ({style, withBorder = false}) => {
    const navigation = useNavigation();

    return <View style={[style, withBorder && styles.border]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
                style={[styles.icon]}
                name="arrow-back-outline" size={20}
                color="black"
            />
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    icon: {
        padding: 8,
    },
    border: {
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 32,
    }
});

export default BackButton;