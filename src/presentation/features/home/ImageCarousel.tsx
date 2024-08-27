import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {CarouselModel} from "../../../infrastructure/models/CarousalModel";

const window = Dimensions.get('window');

type Props = {
    carousalData: CarouselModel[],
}

const ImageCarousel: FC<Props> = ({carousalData}) => {
    return (
        <View style={styles.root}>
            <Carousel
                loop
                vertical={false}
                width={window.width}
                height={200}
                autoPlay={true}
                data={carousalData}
                renderItem={({item}: { item: CarouselModel }) => (
                    <Image source={{uri: item.uri}} style={styles.image}/>
                )}
                scrollAnimationDuration={1000}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default ImageCarousel;
