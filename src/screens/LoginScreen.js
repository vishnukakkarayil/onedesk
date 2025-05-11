import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlowerSvg } from '../assets/images/SvgImages'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const LoginScreen = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isSigningIn, setIsSigningIn] = useState(false);

    const goToLogin = () => {
        console.log('go to login')
    }
    const handleGoogleSignIn = async () => {

        console.log('go to login123')
        if (isSigningIn) return; // prevent multiple sign-in attempts
        setIsSigningIn(true);
        // try {

        await GoogleSignin.hasPlayServices();

        const result = await GoogleSignin.signIn();
        console.log('object---')
        console.log('Sign-in result:', result);
        setUserInfo(result);

        // Now you can send the user's ID token (result.idToken) to your backend
        // for authentication or create a session.
        // } catch (error) {
        //     console.error('Google sign-in error:', error);
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //         // User cancelled the sign-in flow
        //         console.log('User cancelled sign in');
        //     } else if (error.code ===
        //         statusCodes.IN_PROGRESS) {
        //         // Operation (e.g. sign in) is in progress already
        //         console.log('Sign in operation is in progress');
        //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //         // Play services not available or outdated
        //         console.log('Play services not available or outdated');
        //     } else {
        //         // Some other error happened
        //         console.error('Google sign-in error:', error);
        //     }
        // } finally {
        //     setIsSigningIn(false);
        // }
    };

    useEffect(() => {
        // Optional: Check if a user is already signed in
        const checkCurrentUser = async () => {
            const currentUser = await GoogleSignin.getCurrentUser();
            if (currentUser) {
                console.log('Already signed in:', currentUser);
                setUserInfo(currentUser);
            } else {
                console.log(currentUser, 'No user is signed in');
            }
        };

        checkCurrentUser();
    }, []);

    return (
        <ImageBackground
            source={require('../assets/images/loginbackgroung.png')}
            style={styles.backgound}
            resizeMode="cover"
        >
            <View style={styles.loginContainer}>
                <FlowerSvg />
                <View style={styles.textWrap}>
                    <Text style={styles.textStyle}>One</Text>
                    <Text style={styles.textStyle1}>Desk</Text>
                    <Text style={styles.textStyle2}>Know your rights</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGoogleSignIn}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgound: {
        flex: 1,
    },
    textWrap: {
        marginBottom: 20,
    },
    textStyle: {
        fontSize: 40,
        color: '#fff',
        fontFamily: 'SpaceGrotesk-Regular',
        marginTop: 10,
        // lineHeight: 60,
    },
    textStyle1: {
        fontSize: 65,
        color: '#fff',
        fontFamily: 'SpaceGrotesk-Bold',
        lineHeight: 60,
    },
    textStyle2: {
        fontSize: 20,
        color: '#A48F5F',
        fontFamily: 'SpaceGrotesk-Regular',
        lineHeight: 40,
    },
    buttonText: {
        backgroundColor: '#A48F5F',
        color: '#000',
        fontSize: 15,
        fontFamily: 'SpaceGrotesk-Bold',
        paddingVertical: 17,
        paddingHorizontal: 30,
        marginTop: 30,
        textAlign: 'center',
    },
    loginContainer: {
        paddingHorizontal: 30,
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 100,
    }
})

export default LoginScreen