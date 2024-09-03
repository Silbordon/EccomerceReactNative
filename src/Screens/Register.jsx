import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import InputForm from '../components/InputForm'
import { useRegisterMutation } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { registerSchema } from '../validations/registerSchema'
import ButtonPrimary from '../components/ButtonPrimary'

const Register = ({navigation}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [errorConfirmPassword,setErrorConfirmPassword] = useState("")
    const [triggerRegister,{data,isSuccess}] = useRegisterMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
        setErrorPassword("")
        setErrorEmail("")
    },[])

    const onSubmit = async () => {
      try {
        registerSchema.validateSync({email,password,confirmPassword})
        const {data} = await triggerRegister({email,password})
        dispatch(setUser({email:data.email,
         idToken:data.idToken,
         localId:data.localId
       }))
      } catch (error) {
        switch(error.path){
          case "email":
            setErrorEmail(error.message)
            setErrorPassword("")
            setErrorConfirmPassword("")
            break
          case "password":
            setErrorEmail("")
            setErrorPassword(error.message)
            setErrorConfirmPassword("")
            break
          case "confirmPassword":
            setErrorEmail("")
            setErrorPassword("")
            setErrorConfirmPassword(error.message)
            break
            
        }
      }
    }

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <InputForm
                label="Email"
                value={email}
                onChangeText={(t) => setEmail(t)}
                isSecure={false}
                error={errorEmail}
            />
            <InputForm
                label="Password"
                value={password}
                onChangeText={(t) => setPassword(t)}
                isSecure={true}
                error = {errorPassword}
            />
            <InputForm
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={(t) => setConfirmPassword(t)}
                isSecure={true}
                error={errorConfirmPassword}
            />
            <ButtonPrimary onPress={onSubmit} title="Register"/>
            <Text style={styles.sub}>You have an account?</Text>
            <Pressable onPress={()=> navigation.navigate("Login")} >
                <Text style={styles.subLink}>Login</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      container:{
        width:"85%",
        backgroundColor:colors.darkOrange,
        gap:15,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20
      },
      title:{
        fontSize:22,
      
      },
      sub:{
        fontSize:16,
        fontFamily: "Poppins-Regular",
        color :  colors.white
      },
      subLink:{
        fontSize:14,
        fontFamily: "Poppins-Bold",
        color:colors.dark,
      }
})