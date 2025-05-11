/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AddTicketScreen from './src/screens/AddTicketScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID, // Your Web application client ID
      offlineAccess: true, // If you need to access Google APIs on behalf of the user in the background
      hostedDomain: '', // Optional: specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] If you want to force a refresh token to be issued
      accountName: '', // [Android] Specifies an account name on the device that should be used
      iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] Your iOS client ID
    });
  }, []);
  console.log('object----')
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="AddTicketScreen"
          component={AddTicketScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="ServiceScreen"
          component={ServiceScreen}
          options={{ headerShown: false }}
        /> */}
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
