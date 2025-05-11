import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const HandleSafeAreaView = ({ children }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            {children}
        </SafeAreaView>
    )
}

export default HandleSafeAreaView

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginTop: 15,
        width: '100%',
    },
})