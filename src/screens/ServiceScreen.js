import { StyleSheet, Text, View, Dimensions, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { globalStyles, SCREEN_WIDTH, Colors } from '../styles/globalStyles'
import HandleSafeAreaView from '../components/HandleSafeAreaView'
import GradientText from '../components/GradientText'
import FooterIcons from '../components/FooterIcons'
import CustomCarousel from '../components/CustomCarousel'
import BackgroundCircle from '../assets/images/backgroundcircle.svg'
import CloseIcon from '../assets/images/closeblack.svg';

const ServiceScreen = () => {
    const footerData = {
        leftIcon: [],
        rightIcon: [
            {
                id: 1,
                icon: <CloseIcon />,
                action: () => {
                    console.log('Right Dashboard icon clicked');
                },
                selected: false,
            },
        ],
    };
    return (
        <View style={globalStyles.container}>
            <BackgroundCircle style={globalStyles.appBackground} width={SCREEN_WIDTH} />
            <HandleSafeAreaView>
                <View style={globalStyles.screenContainer}>
                    <View style={styles.addTicketWrap}>
                        <View>
                            <View>
                                <Text style={globalStyles.appTitle1}>Now it's your turn to express what you need</Text>
                            </View>
                            <View style={styles.descriptionWrap}>
                                <Text style={globalStyles.appSubTitle}>Describe your Query</Text>
                                <Text style={[globalStyles.appText, { marginTop: 8 }]}>It helps the support team understand the problem clearly and take appropriate action quickly.</Text>
                            </View>
                            <View style={{ marginTop: 25, marginBottom: 10 }}>
                                <GradientText style={globalStyles.gradientText}>Select one option to continue,</GradientText>
                            </View>
                            <View style={styles.carouselwrap}>
                                <CustomCarousel />
                            </View>

                        </View>
                        <View>
                            <FooterIcons data={footerData} />
                        </View>
                    </View>
                </View>
            </HandleSafeAreaView >
        </View >
    )
}
const styles = StyleSheet.create({
    addTicketWrap: {
        flex: 1,
        width: '100%',
        marginTop: 130,
        justifyContent: 'space-between',
    },
    textArea: {
        borderBottomWidth: 1,
        borderBottomColor: '#555',
        fontSize: 17,
        paddingVertical: 8,
        fontFamily: 'SpaceGrotesk-Regular',
        color: '#000',
        lineHeight: 22,
    },
    descriptionWrap: {
        marginTop: 30,
    },
    FileUploadWrap: {
        marginTop: 45,
    },
    uploadTitle: {
        fontSize: 17,
        color: '#000',
        fontFamily: 'SpaceGrotesk-SemiBold',
    },
    uploadFile: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#000',
        flexDirection: 'row',
        columnGap: 8,
    },
    uploadText: {
        color: '#fff',
        fontFamily: 'SpaceGrotesk-Regular',
        fontSize: 16,
    }
})
export default ServiceScreen