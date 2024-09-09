// import { StyleSheet, Text, View,Pressable } from 'react-native'
// import { colors } from '../global/colors'
// import { useEffect, useState } from 'react'
// import InputForm from '../components/InputForm'
// import { useLoginMutation } from '../services/auth'
// import { setUser } from '../features/auth/authSlice'
// import { useDispatch } from 'react-redux'
// import { loginSchema } from '../validations/loginSchema'
// import ButtonPrimary from '../components/ButtonPrimary'
// import { insertSession } from '../db'


// const Login = ({navigation}) => {

//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
//     const [errorEmail,setErrorEmail] = useState("")
//     const [errorPassword,setErrorPassword] = useState("")
//     const [triggerLogin,{data,isSuccess,isError,error}] = useLoginMutation()
//     const dispatch = useDispatch()

//     // useEffect(()=>{
//     //     setErrorPassword("")
//     //     setErrorEmail("")
//     // },[])

//     const onSubmit = async () => {
//         try {
//           loginSchema.validateSync({email,password})
//           const {data} = await triggerLogin({email,password})
//           insertSession(data)
//           dispatch(setUser({
//             email:data.email,
//             idToken:data.idToken,
//             localId:data.localId
//           }))
//         } catch (error) {
//           switch(error.path){
//             case "email":
//               setErrorEmail(error.message)
//               setErrorPassword("")
//               break
//             case "password":
//               setErrorPassword(error.message)
//               console.log(error.message);
//               setErrorEmail("")
//               break
//               default:
//                 break
//           }
     
//         }
//     }

//   return (
//     <View style={styles.main}>
//         <View style={styles.container}>
//             <InputForm
//                 label="Email"
//                 value={email}
//                 onChangeText={(t) => setEmail(t)}
//                 isSecure={false}
//                 error={errorEmail}
//             />
//             <InputForm
//                 label="Password"
//                 value={password}
//                 onChangeText={(t) => setPassword(t)}
//                 isSecure={true}
//                 error={errorPassword}
//             />
//             <ButtonPrimary onPress={onSubmit} title="Login"/>
//             <Text style={styles.sub}>You don't have an account?</Text>
//             <Pressable onPress={()=> navigation.navigate("Register")} >
//                 <Text style={styles.subLink}>Register</Text>
//             </Pressable>
//         </View>
//     </View>
//   )
// }

// export default Login

// const styles = StyleSheet.create({
//     main:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center"
//       },
//       container:{
//         width:"85%",
//         backgroundColor:colors.darkOrange,
//         gap:15,
//         borderRadius:8,
//         justifyContent:"center",
//         alignItems:"center",
//         paddingVertical:20
//       },
//       sub:{
//         fontSize:16,
//         fontFamily: "Poppins-Regular",
//         color :  colors.white
//       },
//       subLink:{
//         fontSize:14,
//         fontFamily: "Poppins-Bold",
//         color:colors.dark,
//       }
// })



import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import { useLoginMutation } from '../services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../validations/loginSchema'
import ButtonPrimary from '../components/ButtonPrimary'
import { insertSession } from '../db'
import AntDesign from '@expo/vector-icons/AntDesign'; 

const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false) 
    const [triggerLogin, { data, isSuccess, isError, error }] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = async () => {
      try {
          setErrorEmail("")
          setErrorPassword("")
  
          loginSchema.validateSync({ email, password }, { abortEarly: false })
  
          const { data } = await triggerLogin({ email, password })
          console.log(password);
          insertSession(data)
          dispatch(setUser({
              email: data.email,
              idToken: data.idToken,
              localId: data.localId
          }))
      } catch (validationError) {
          if (validationError.inner) {
              validationError.inner.forEach(err => {
                  if (err.path === "email") {
                      setErrorEmail(err.message)
                  }
                  if (err.path === "password") {
                      setErrorPassword(err.message)
                  }
              })
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
                <View style={styles.passwordContainer}>
                    <InputForm
                        label="Password"
                        value={password}
                        onChangeText={(t) => setPassword(t)}
                        isSecure={!showPassword}
                        error={errorPassword}
                    />
                    <Pressable 
                        style={styles.eyeIcon} 
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <AntDesign 
                            name={showPassword ? "eye" : "eyeo"} 
                            size={24} 
                            color={colors.white} 
                        />
                    </Pressable>
                </View>
                <ButtonPrimary onPress={onSubmit} title="Login" />
                <Text style={styles.sub}>You don't have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.subLink}>Register</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "85%",
        backgroundColor: colors.darkOrange,
        gap: 15,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    passwordContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 20, 
        top: 30
    },
    sub: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: colors.white
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Poppins-Bold",
        color: colors.dark,
    }
})



