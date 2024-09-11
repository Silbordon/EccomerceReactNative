import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import Loading from '../components/Loading'
import { useGetUserQuery } from '../services/shop'
import { useSelector } from 'react-redux'

const Profile = ({ navigation }) => {

    const localId = useSelector(state => state.auth.localId)
    const { data: user, isSuccess, isLoading } = useGetUserQuery({ localId })

    if (isLoading) return <Loading />

    return (
        <View style={styles.container}>
            <Image
                source={user.image ? {uri:user.image[0]}:require("../../assets/images/profile.jpg")}
                resizeMode='cover'
                style={styles.image}
            />
            <ButtonPrimary title="Add profile picture" onPress={() => navigation.navigate("ImageProfile")} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        alignItems: "center",
        gap: 20
    },
    image: {
        width: 180,
        height: 180
    }
})