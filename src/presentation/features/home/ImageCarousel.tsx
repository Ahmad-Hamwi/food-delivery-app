import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {CarouselModel} from "../../../infrastructure/models/CarousalModel";
import {useSharedValue} from "react-native-reanimated";

const window = Dimensions.get('window');

type Props = {
    carousalData: CarouselModel[],
}

const ImageCarousel: FC<Props> = ({carousalData}) => {
    const progress = useSharedValue<number>(0);

    return (
        <View style={styles.root}>
            <Carousel
                loop
                vertical={false}
                width={window.width}
                height={150}
                autoPlay={true}
                data={carousalData}
                renderItem={({item}: { item: CarouselModel }) => (
                    <Image source={{uri: item.uri}} style={styles.image}/>
                )}
                onProgressChange={() => progress}
                scrollAnimationDuration={1000}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {},
    image: {
        width: '90%',
        alignSelf: 'center',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 16,
    },
});

export default ImageCarousel;
