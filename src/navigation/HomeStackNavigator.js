import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ListCategory from "../Screens/ListCategory";
import ProductDetail from "../Screens/ProductDetail";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
          <Stack.Navigator
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="HomePage" component={Home} />
            <Stack.Screen name="ListCategory" component={ListCategory} /> 
            <Stack.Screen name="ProductDetail" component={ProductDetail} /> 
          </Stack.Navigator>
  );
}