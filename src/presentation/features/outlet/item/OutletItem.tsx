import {StyledComponentProps} from "../../../components/StyledComponentProps";
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {OutletModel} from "../../../../infrastructure/models/OutletModel";

type Props = StyledComponentProps & {
    restaurant: OutletModel,
    onPress: () => void;
}

const OutletItem: FC<Props> = ({style, restaurant, onPress}) => {
    return (
        <TouchableOpacity style={[style, styles.root]} onPress={onPress}>
            <View>
                <View style={styles.image}/>
                <View style={styles.space}/>
                <Text style={styles.title}>{restaurant.title}</Text>
                <Text style={styles.description}>{restaurant.description}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create(
    {
        root: {},
        image: {
            height: 150,
            width: "100%",
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
        },
        space: {
            height: 8,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        description: {
            fontSize: 16,
        }
    }
);

export default OutletItem;