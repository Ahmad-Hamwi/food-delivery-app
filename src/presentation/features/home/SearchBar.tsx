import {StyledComponentProps} from "../../components/StyledComponentProps";
import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import HorizontalDivider from "../../components/HorizontalDivider";
import BackButton from "../outlet/details/BackButton";

type HomeSearchBarProps = StyledComponentProps & {
    actAsButton?: boolean;
    onPress?: () => void | undefined;
    onTextInput?: ((query: string) => void) | undefined;
    value?: string | undefined;
    showBackButton?: boolean;
}

const SearchBar: FC<HomeSearchBarProps> = (
    {
        style,
        actAsButton = false,
        onPress = undefined,
        onTextInput = undefined,
        value = undefined,
        showBackButton = false,
    }
) => {
    return <View style={style}>
        <View style={styles.container}>
            {showBackButton && <BackButton withBorder style={styles.back}/>}
            <TouchableOpacity style={styles.box} onPress={onPress} disabled={!actAsButton}>
                <Ionicons name="search" size={20} color="black" style={styles.icon}/>
                {
                    actAsButton
                        ? <Text style={[styles.hintText, styles.text]}>Search</Text>
                        : <TextInput
                            autoFocus
                            style={styles.text}
                            onChangeText={onTextInput}
                            value={value}
                            placeholder={"Search"}
                            selectionColor={"#e85589"}
                        />
                }
            </TouchableOpacity>
        </View>
        <HorizontalDivider/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 16,
    },
    back: {
        alignSelf: "center",
        marginEnd: 8,
        backgroundColor: '#ffffff',
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d5d5d5',
    },
    icon: {
        marginRight: 10,
    },
    hintText: {
        color: 'gray',
        fontSize: 16,
    },
    text: {
        maxHeight: 20,
        fontSize: 16,
    }
});

export default SearchBar;
