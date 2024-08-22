import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import FooterTapNavigator from './FooterTapNavigator'

const Navigator = () => {
  return (
    <NavigationContainer>
      <FooterTapNavigator />
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})