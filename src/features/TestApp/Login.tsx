/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'
import {routes} from '../../navigation/routes'
import {testGetUser} from '../../api/Test'
import type {MainStackScreenNavigationProps} from '../../navigation/types'

interface ILogin extends MainStackScreenNavigationProps<'Login'> {}

const Login = ({navigation}: ILogin) => {
  const handleGetApiTest = async () => {
    const res = await testGetUser()
    if (res) {
      console.log('hhahaaha', res)
    }
  }

  useEffect(() => {
    handleGetApiTest()
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.BottomTab, {screen: routes.Home})
        }}>
        <Text>go to main screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
