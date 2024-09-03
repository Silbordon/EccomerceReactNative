import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import FooterTapNavigator from './FooterTapNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector } from 'react-redux'

const Navigator = () => {

  const idToken = useSelector(state => state.auth.idToken)

  return (
    <NavigationContainer>
       {idToken ? <FooterTapNavigator/>  : <AuthStackNavigator/> }
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})