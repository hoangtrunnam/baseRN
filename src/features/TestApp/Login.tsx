/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import type {MainStackScreenNavigationProps} from 'src/navigation/types'
import {routes} from 'src/navigation/routes'

interface Login extends MainStackScreenNavigationProps<'Login'> {}

const Login = ({navigation}: Login) => {
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
