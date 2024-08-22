import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../Screens/Orders'

const Stack = createNativeStackNavigator()

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name='Orders History' component={Orders}/>
        </Stack.Navigator>
  )
}

export default OrderStackNavigator