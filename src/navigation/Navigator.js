import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import FooterTapNavigator from './FooterTapNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../db'
import { setUser } from '../features/auth/authSlice'

const Navigator = () => {

  const idToken = useSelector(state => state.auth.idToken)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    (async ()=>{
      const sessions = await fetchSession()
      if(sessions.rows.length){
        dispatch(setUser(sessions.rows._array[0]))
      }
    })()
  },[])

  return (
    <NavigationContainer>
       {idToken ? <FooterTapNavigator/>  : <AuthStackNavigator/> }
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})