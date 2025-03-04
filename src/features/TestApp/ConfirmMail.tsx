import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import type {MainStackScreenNavigationProps} from 'src/navigation/types'
import {routes} from 'src/navigation/routes'

interface IConfirmMail extends MainStackScreenNavigationProps<'ConfirmMail'> {}

const ConfirmMail = ({navigation, route}: IConfirmMail) => {
  const {params} = route
  const value1 = params?.value || 1
  console.log('value confirm mail:', value1)
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ConfirmMail dont do that again ok? did you get it?</Text>
      <Text>yes i got it. please dont say anymore</Text>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => {
          // navigation.navigate(routes.BottomTab, {screen: routes.Home})
          // dispatch(setEmailConfirm(true))
          navigation.push(routes.ConfirmMail, {value: value1 + 1})
          // navigation.navigate(routes.ConfirmMail, {value: value1 + 1})
          console.log("state: ", navigation.getState())
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ConfirmMail
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {height: 200, width: 200},
  btnLogin: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'red',
  },
})
