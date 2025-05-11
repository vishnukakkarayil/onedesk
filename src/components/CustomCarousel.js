import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from 'react-native-reanimated-carousel/src/components/Pagination';
import { useSharedValue } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import BagIcon from '../assets/images/bag.svg';

const { width } = Dimensions.get('window');

const data = [
    { color: "#B0604D", label: "Color 1" },
    { color: "#899F9C", label: "Color 2" },
    { color: "#B3C680", label: "Color 3" },
    { color: "#5C6265", label: "Color 4" },
    { color: "#F5D399", label: "Color 5" },
    { color: "#F1F1F1", label: "Color 6" },
];

const CustomCarousel = () => {
    const progress = useSharedValue(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderItems = ({ item }) => {
        return (
            <LinearGradient
                colors={['#eee9df', '#CBB47A', '#eee9df']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                locations={[0.15, 0.5, 0.85]}
                style={styles.gradientBackground}
            >
                <View style={styles.carouselItem}>
                    <View style={styles.carouselIcon} >
                        <BagIcon />
                    </View>
                    <View style={styles.carouselText} >
                        <Text style={styles.carouselTitle}>Human Resource</Text>
                        <Text style={styles.carouselContent}>Benefits / TimeOff / Insurance</Text>
                    </View>
                </View>
            </LinearGradient>
        );
    };

    const DotsPagination = ({ length, currentIndex }) => {
        return (
            <View style={styles.paginationContainer}>
                {Array.from({ length }).map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dotStyle,
                            currentIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.carouselWrapper}>
                <Carousel
                    data={data}
                    renderItem={renderItems}
                    width={width * 0.9}
                    height={180}
                    loop
                    autoPlay
                    autoPlayInterval={4000}
                    pagingEnabled
                    snapEnabled
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 50,
                    }}
                    onProgressChange={progress}
                    onSnapToItem={index => setCurrentIndex(index)}
                />
                {/* <View style={styles.paginationWrapper}> */}
                <DotsPagination length={data.length} currentIndex={currentIndex} />
                {/* </View> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carouselWrapper: {
        height: '200',
        justifyContent: 'center',
        alignItems: 'center',

    },
    gradientBackground: {
        flex: 1,
        overflow: 'hidden',
        paddingHorizontal: 16,
    },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        // marginTop: 10,
    },
    dotStyle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#f5edd9',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#A48F5F',
    },
    carouselItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 12,
    },
    carouselTitle: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'SpaceGrotesk-SemiBold',
    },
    carouselContent: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'SpaceGrotesk-Regular',
    }
});

export default CustomCarousel;
