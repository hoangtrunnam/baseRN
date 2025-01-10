/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
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
import {Thumb} from 'src/components/Image'
import {setEnableDebugger} from 'src/redux/AppInfo/slice'
import {useAppSelector} from 'src/redux/hooks'

interface ILogin extends MainStackScreenNavigationProps<'Login'> {}

const Login = ({navigation}: ILogin) => {
  const dispatch = useDispatch()
  const {isEnableDebugger} = useAppSelector(state => state.appInfoReducer)

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
      <DefaultActionBar leftIconType="none" title="Login screen" />
      <View testID="welcome" style={styles.container}>
        <Wallet width={24} height={24} />
        <Thumb
          source={IMAGES.globalImage}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>Login screen</Text>
        <View style={{borderRadius: 16}}>
          <TouchableOpacity
            style={styles.btnLogin}
            activeOpacity={0.6}
            onLongPress={() => {
              setTimeout(() => {
                dispatch(setEnableDebugger(!isEnableDebugger))
              }, 3000)
            }}
            onPress={() => {
              navigation.navigate(routes.BottomTab, {screen: routes.Home})
              dispatch(setEmailConfirm(true))
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Login

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
