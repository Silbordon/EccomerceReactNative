import { StyleSheet, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import CartStackNavigator from "./CartStackNavigator";
import OrderStackNavigator from "./OrderStackNavigator";
import { colors } from "../global/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ProfileStackNavigator from "./ProfileStackNavigator";

const Tab = createBottomTabNavigator();

const FooterTapNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="home"
                  size={28}
                  color={focused ? "black" : colors.lightGray}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CartStackNavigator"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome
                  name="shopping-cart"
                  size={28}
                  color={focused ? "black" : colors.lightGray}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="OrderStackNavigator"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="th-list"
                  size={28}
                  color={focused ? "black" : colors.lightGray}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome
                  name="user-circle-o"
                  size={28}
                  color={focused ? "black" : colors.lightGray}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default FooterTapNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.green700,
    height: 55,
  },
});
