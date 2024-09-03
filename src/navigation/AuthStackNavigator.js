import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
  return (
   <Stack.Navigator
    screenOptions={(
        ({route}) => {
            return {
                header: () => <Header title={route.name === "Login" ? "Login":"Register"}/>
            }
        }
)}
   >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
   </Stack.Navigator>
  )
}

export default AuthStackNavigator