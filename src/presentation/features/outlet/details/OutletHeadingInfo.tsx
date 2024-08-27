import {StyleSheet, Text, View} from "react-native";

const OutletHeadingInfo = () => {
    return (
        <View>
            <View style={styles.outletImage}/>
            <View style={styles.space}/>
            <View style={styles.outletInfo}>
                <Text style={styles.title}>The gourmet Bistro</Text>
                <Text style={styles.description}>A fine dining restaurant offering a diverse menu of gourmet
                    dishes and
                    a curated wine list.</Text>
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
        paddingBottom: 8,
    }
});

export default OutletHeadingInfo;