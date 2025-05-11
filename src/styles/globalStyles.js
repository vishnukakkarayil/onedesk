import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const Colors = {
    primary: '#A48F5F',
    //   secondary: '#6C757D',
    //   background: '#F5F5F5',
    //   text: '#212529',
    //   border: '#CED4DA',
    //   danger: '#DC3545',
};

export const globalStyles = {
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 0,
        margin: 0,
        width: '100%',
        backgroundColor: '#fff',
    },
    appBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    appTitle: {
        fontSize: 35,
        color: '#000',
        fontFamily: 'SpaceGrotesk-SemiBold',
        lineHeight: 45,
    },
    appTitle1: {
        fontSize: 30,
        color: '#000',
        fontFamily: 'SpaceGrotesk-Bold',
        lineHeight: 40,
    },
    appSubTitle: {
        fontSize: 25,
        color: '#A48F5F',
        fontFamily: 'SpaceGrotesk-Bold',
        lineHeight: 30,
    },
    appText: {
        fontSize: 17,
        color: '#000',
        fontFamily: 'SpaceGrotesk-Regular',
        lineHeight: 22,
    },
    gradientText: {
        fontSize: 18,
        fontFamily: 'SpaceGrotesk-Bold',
    },
}