import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Cart from '../Screens/Cart'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator >
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
  )
}

export default CartStack