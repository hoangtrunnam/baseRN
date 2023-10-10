/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native'
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {routes} from 'src/navigation/routes'
import type {MainStackScreenNavigationProps} from 'src/navigation/types'
import {testGetUser} from 'src/api/Test'
import {setEmailConfirm} from 'src/redux/Auth/slice'
import Wallet from 'src/assets/icons/Wallet'
import {IMAGES} from 'src/assets/images'
import DefaultActionBar from 'src/components/DefaultActionBar'
import LoadingPortal from 'src/components/Loading/LoadingPortal'
import {LinearGradientButton} from 'src/components/Button/LinearGradientButton'

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
    LoadingPortal.show()
    handleGetApiTest()
    LoadingPortal.hide()
  }, [dispatch])

  return (
    <>
      <DefaultActionBar leftIconType="IconClose" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Wallet width={24} height={24} />
        <Image source={IMAGES.globalImage} style={{width: 240, height: 240}} resizeMode="cover" />
        <Text>Login screen</Text>
        <View style={{backgroundColor: 'red', borderRadius: 16}}>
          <LinearGradientButton
            style={{padding: 8, alignItems: 'center', borderRadius: 16}}
            onPress={() => {
              console.log('okok')
              navigation.navigate(routes.BottomTab, {screen: routes.Home})
              dispatch(setEmailConfirm(true))
            }}>
            <Text> Login</Text>
          </LinearGradientButton>
        </View>
      </View>
    </>
  )
}

export default Login
