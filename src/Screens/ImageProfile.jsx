import { StyleSheet, Text, View,Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from 'react'
import { usePatchImageProfileMutation } from '../services/users'
import { useSelector } from 'react-redux'
import ButtonPrimary from '../components/ButtonPrimary'

const ImageProfile = ({navigation}) => {

    const [image,setImage] = useState("")
    const [triggerAddImageProfile] = usePatchImageProfileMutation()
    const localId = useSelector(state => state.auth.localId)

    const pickImage = async () => {
       const {granted} = await ImagePicker.requestCameraPermissionsAsync()
       if(!granted) return 

       const result = await ImagePicker.launchCameraAsync({
        aspect:[9,9],
        quality:0.2,
        base64:true,
        allowsEditing:true
       })

       if(result.canceled) return
       console.log(result)
       setImage("data:image/jpg;base64," + result.assets[0].base64)

    }
    const confirmImage = () => {
        triggerAddImageProfile({image,localId})
        navigation.navigate("Profile")
    }
  return (
    <View style={styles.container}>
      <Image
        source={image ? {uri:image}:require("../../assets/images/profile.jpg")}
        resizeMode='cover'
        style={styles.image}
      />
      <ButtonPrimary title="Take a photo" onPress={pickImage}/>
      <ButtonPrimary title="Confirm" onPress={confirmImage}/>
    </View>
  )
}

export default ImageProfile

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