import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../global/colors'
import React from 'react'

const ButtonPrimary = ({title, onPress}) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.buttonPrimary,
                {
                    backgroundColor: colors.green900,
                    opacity: pressed ? 0.7 : 1,
                },
            ]}>
            <Text style={styles.buttonPrimaryText}>{title}</Text>
        </Pressable>
    )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.green900,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: 200
    },
    buttonPrimaryText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        textAlign: 'center',
    },
})