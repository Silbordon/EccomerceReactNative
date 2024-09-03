import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/profile.jpg")}
        resizeMode='cover'
        style={styles.image}
      />
      <ButtonPrimary title="Add profile picture" onPress={()=>navigation.navigate("ImageProfile")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        marginTop:70,
        alignItems:"center",
        gap:20
    },
    image:{
        width:180,
        height:180
    }
})