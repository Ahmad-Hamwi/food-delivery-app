import {StyleSheet, Text, View} from "react-native";
import {OutletModel} from "../../../../infrastructure/models/OutletModel";
import {FC} from "react";

type Props = {
    outlet: OutletModel;
}

const OutletHeadingInfo: FC<Props> = ({outlet}) => {
    return (
        <View>
            <View style={styles.outletImage}/>
            <View style={styles.space}/>
            <View style={styles.outletInfo}>
                <Text style={styles.title}>{outlet.title}</Text>
                <Text style={styles.description}>{outlet.description}</Text>
            </View>
            <View style={styles.space}/>
            <Text style={styles.menuTitle}>Menu</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    outletImage: {
        width: "100%",
        height: 200,
        backgroundColor: '#e3e3e3',
    },
    space: {
        height: 24,
    },
    outletInfo: {
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 18,
    },
    menuTitle: {
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 8,
    }
});

export default OutletHeadingInfo;