import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Profile from '../Screens/Profile'
import ImageProfile from '../Screens/ImageProfile'
const Stack = createNativeStackNavigator()

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
            screenOptions={(
                () => {
                    return {
                        header: () => <Header title="Profile"/>
                    }
                }
            )}
        >
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='ImageProfile' component={ImageProfile}/>
        </Stack.Navigator>
  )
}

export default ProfileStackNavigator