/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
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
import CodePush, { type LocalPackage } from 'react-native-code-push'
import DeviceInfo from 'react-native-device-info'

interface ILogin extends MainStackScreenNavigationProps<'Login'> {}

const Login = ({navigation}: ILogin) => {
  const dispatch = useDispatch()
  const {isEnableDebugger} = useAppSelector(state => state.appInfoReducer)
  const readableVersion = DeviceInfo.getReadableVersion();
  const [infoApp, setInfoApp] = useState<LocalPackage | null>()

  const handleGetApiTest = async () => {
    const res = true
    if (res) {
      console.log('hhahaaha', res)
    }
  }

  // useEffect(() => {
  //   // LoadingPortal.show()
  //   // handleGetApiTest()
  //   // LoadingPortal.hide()
  // }, [dispatch])

  useEffect(() => {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING)
      .then(metadata => {
        if (metadata) {
          console.log('Running update metadata:', metadata);
          setInfoApp(metadata)
          // metadata.label, metadata.packageHash, metadata.appVersion, ...
        } else {
          console.log('No CodePush update installed.');
        }
      })
      .catch(error => {
        console.log('Error fetching update metadata:', error);
      });
  }, []);




  return (
    <>
      <DefaultActionBar leftIconType="none" title="Login screen" />
      <View testID="welcome" style={styles.container}>
        <Wallet width={24} height={24} />
        <Thumb
          source={IMAGES.banner}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>version from device info: {readableVersion}</Text>
        <Text>version from codepush info: {infoApp?.appVersion}</Text>
        <Text>init app</Text>
        <Text>this is v1</Text>
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
