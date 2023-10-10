/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {routes} from 'src/navigation/routes'
import type {MainStackScreenNavigationProps} from 'src/navigation/types'
import {testGetUser} from 'src/api/Test'
import {setEmailConfirm} from 'src/redux/Auth/slice'

interface ILogin extends MainStackScreenNavigationProps<'Login'> {}

const Login = ({navigation}: ILogin) => {
  const dispatch = useDispatch()
  const handleGetApiTest = async () => {
    const res = await testGetUser()
    if (res) {
      console.log('hhahaaha', res)
    }
  }

  useEffect(() => {
    handleGetApiTest()
  }, [dispatch])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.BottomTab, {screen: routes.Home})
          dispatch(setEmailConfirm(true))
        }}>
        <Text>go to main screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
