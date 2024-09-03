import { StyleSheet, Text, View,TextInput } from 'react-native'
import { colors } from '../global/colors'

const InputForm = ({label,value,onChangeText,isSecure,error}) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  
            value={value}  
            onChangeText={onChangeText} 
            style={styles.input}
            secureTextEntry={isSecure}
        />
        <View><Text style={styles.error}>{error ? error : ""} </Text></View>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer:{
        width:"100%"
    },
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:3,
        borderBottomColor:"white",
        padding:2,
        color: colors.white,
        fontFamily: "Poppins-Bold",
        fontSize:14,
        marginHorizontal:"5%",
        marginVertical:10
      },
      titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        color: colors.white,
        fontSize:16,
        fontFamily: "Poppins-Regular",
      },
      error:{
        fontSize:18,
        color:colors.green900,
        fontFamily: "Barlow-Italic",        
        marginLeft:20
      }
})