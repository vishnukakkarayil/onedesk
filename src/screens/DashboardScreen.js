import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import BackgroungCircle from '../assets/images/backgroundcircle.svg';
import HandleSafeAreaView from '../components/HandleSafeAreaView';
import { globalStyles, SCREEN_WIDTH } from '../styles/globalStyles';
import FooterIcons from '../components/FooterIcons';
import SearchIcon from '../assets/images/search.svg';
import NotificationIcon from '../assets/images/notification.svg';
import DashboardIcon from '../assets/images/dashboardblack.svg';
import UserWhiteIcon from '../assets/images/userwhite.svg';
import AdminModewhiteIcon from '../assets/images/adminmodewhite.svg';
import PlusIcon from '../assets/images/plus.svg';

const { width, height } = Dimensions.get('window');

const DashboardScreen = () => {
    const footerData = {
        leftIcon: [
            {
                id: 1,
                icon: <DashboardIcon />,
                action: () => {
                    console.log('Dashboard icon clicked');
                },
                selected: true,
            },
            {
                id: 2,
                icon: <AdminModewhiteIcon />,
                action: () => {
                    console.log('Admin icon clicked');
                },
                selected: false,
            },
            {
                id: 3,
                icon: <UserWhiteIcon />,
                action: () => {
                    console.log('User icon clicked');
                },
                selected: false,
            },
        ],
        rightIcon: [
            {
                id: 1,
                icon: <PlusIcon />,
                action: () => {
                    console.log('Right Dashboard icon clicked');
                },
                selected: false,
            },
        ],
    };
    return (
        <View style={globalStyles.container}>
            <BackgroungCircle style={globalStyles.appBackground} width={SCREEN_WIDTH} />
            <HandleSafeAreaView>
                <View style={globalStyles.screenContainer}>
                    <View style={styles.dashboardWrap}>
                        <View style={styles.headerIconWrap}>
                            <View style={styles.headerIcon}>
                                <SearchIcon />
                            </View>
                            <View style={styles.headerIcon}>
                                <NotificationIcon />
                            </View>
                        </View>
                        <View style={styles.wrapper}>
                            <View style={styles.dashboardTextWrap}>
                                <Text>
                                    <Text style={globalStyles.appTitle}>Hi </Text>
                                    <Text style={styles.userName}>Vishnu,</Text>
                                </Text>
                                <Text style={globalStyles.appTitle}>How can i help</Text>
                                <Text style={globalStyles.appTitle}>you today?</Text>
                            </View>
                            <FooterIcons data={footerData} />
                        </View>
                    </View>
                </View>
            </HandleSafeAreaView>
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    dashboardWrap: {
        flex: 1,
        marginTop: 20,
    },
    headerIconWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
        marginTop: 20,
    },
    headerIcon: {
        backgroundColor: '#80808024',
        width: 55,
        height: 55,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        // paddingBottom: 40,
    },
    dashboardTextWrap: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 27,
        // paddingHorizontal: 10,
    },
    groupIcon: {
        backgroundColor: '#464646',
        width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        fontSize: 30,
        color: '#A48F5F',
        fontFamily: 'SpaceGrotesk-Bold',
    },
});
