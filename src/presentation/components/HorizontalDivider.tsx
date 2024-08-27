import React from 'react';
import {StyleSheet, View} from 'react-native';

const HorizontalDivider = () => {
    return <View style={styles.divider}/>;
};

const styles = StyleSheet.create({
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#cccccc',
    },
});

export default HorizontalDivider;
