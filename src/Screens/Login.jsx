import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import { useLoginMutation } from '../services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../validations/loginSchema'
import ButtonPrimary from '../components/ButtonPrimary'


const Login = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [triggerLogin,{data,isSuccess,isError,error}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
        setErrorPassword("")
        setErrorEmail("")
    },[])

    const onSubmit = async () => {
        try {
          loginSchema.validateSync({email,password})
          const {data} = await triggerLogin({email,password})
          dispatch(setUser({
            email:data.email,
            idToken:data.idToken,
            localId:data.localId
          }))
        } catch (error) {
        //   console.log(error.path),
        //   console.log(error.message)
          switch(error.path){
            case "email":
              setErrorEmail(error.message)
              setErrorPassword("")
              break
            case "password":
              setErrorPassword(error.message)
              setErrorEmail("")
              break
              default:
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
                error={errorPassword}
            />
            <ButtonPrimary onPress={onSubmit} title="Login"/>
            <Text style={styles.sub}>You don't have an account?</Text>
            <Pressable onPress={()=> navigation.navigate("Register")} >
                <Text style={styles.subLink}>Register</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

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