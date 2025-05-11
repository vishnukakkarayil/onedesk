import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const FooterIcons = ({ data }) => {
    return (
        <View style={
            [styles.footerIconWrap,
            {
                justifyContent: data.leftIcon.length > 0 ? 'space-between' : 'flex-end'

            }]}>
            {data.leftIcon.length > 0 &&
                <View style={styles.iconGroup}>
                    {
                        data.leftIcon.map((item, index) => (
                            <View key={index} style={[styles.groupIcon, { backgroundColor: item.selected ? '#fff' : '#464646' }]}>
                                {item.icon}
                            </View>
                        ))
                    }
                </View>
            }
            {data.rightIcon.length > 0 &&
                data.rightIcon.map((item, index) => (
                    <View key={index} style={styles.footerIcon}>
                        {item.icon}
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    footerIconWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        width: 'auto',
        height: 'auto',
        backgroundColor: '#000',
        borderRadius: 50,
        padding: 7,
    },
    groupIcon: {
        backgroundColor: '#464646',
        width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerIcon: {
        backgroundColor: '#000',
        width: 55,
        height: 55,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default FooterIcons