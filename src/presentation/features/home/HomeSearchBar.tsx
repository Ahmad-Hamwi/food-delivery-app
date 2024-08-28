import {StyledComponentProps} from "../../components/StyledComponentProps";
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

type HomeSearchBarProps = StyledComponentProps & {
    onPress: () => void;
}

const HomeSearchBar: FC<HomeSearchBarProps> = ({ style, onPress }) => {
    return (
        <TouchableOpacity style={[style, styles.root]} onPress={onPress}>
            <Ionicons name="search" size={20} color="black" style={styles.icon} />
            <Text style={styles.hintText}>Search</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        paddingVertical: 10,
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
});

export default HomeSearchBar;
