import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/images/logo2.png")}
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        backgroundColor: colors.lightOrange,
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        padding: 20
    },
    text: {
        color: colors.green900,
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        marginLeft: 10
    },
    image:{
        width: 60,
        height: 60
    }
})