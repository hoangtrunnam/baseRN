/* eslint-disable react-native/no-inline-styles */
import {View, Text, Platform} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {routes} from 'src/navigation/routes'
import type {MainStackScreenNavigationProps} from 'src/navigation/types'
import {testGetUser} from 'src/api/Test'
import {setEmailConfirm} from 'src/redux/Auth/slice'
import Wallet from 'src/assets/icons/Wallet'
// import {IMAGES} from 'src/assets/images'
import DefaultActionBar from 'src/components/DefaultActionBar'
import LoadingPortal from 'src/components/Loading/LoadingPortal'
import {LinearGradientButton} from 'src/components/Button/LinearGradientButton'
// import {Thumb} from 'src/components/Image'
import InputForm from 'src/components/Input/InputForm'
import {Button} from 'src/components/Button'
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import {
  LoginManager,
  AccessToken,
  AuthenticationToken,
  Profile,
} from 'react-native-fbsdk-next'

GoogleSignin.configure({
  iosClientId:
    '425820145476-j7vquv6g7spvqou51kn32sfnctdn018e.apps.googleusercontent.com',
  webClientId:
    '425820145476-j7vquv6g7spvqou51kn32sfnctdn018e.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
  // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
})

interface ILogin extends MainStackScreenNavigationProps<'Login'> {}
// 425820145476-j7vquv6g7spvqou51kn32sfnctdn018e.apps.googleusercontent.com
const Login = ({navigation}: ILogin) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>('')

  const handleGetApiTest = async () => {
    const res = await testGetUser()
    if (res) {
      console.log('hhahaaha', res)
    }
  }

  const handleLoginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const response = await GoogleSignin.signIn()
      const token = await GoogleSignin.getTokens()
      console.log('🚀 ~ token hahahaaaaaaa:', token)
      if (isSuccessResponse(response)) {
        console.log('🚀 ~ handleLoginWithGoogle ~ response:', response)
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            console.log('run statusCodes.IN_PROGRESS')
            break
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('run statusCodes.PLAY_SERVICES_NOT_AVAILABLE')
            // Android only, play services not available or outdated
            break
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  }

  const handleLoginWithFaceBook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(
        ['public_profile', 'email'],
      )
      console.log('🚀 ~ handleLoginWithFaceBook ~ result:', result)

      if (result.isCancelled) {
        console.log('User cancelled the login process')
        throw 'User cancelled the login process'
      }

      // Once signed in, get the users AccessToken
      const data = await AccessToken.getCurrentAccessToken()
      if (!data) {
        console.log("🚀 ~ handleLoginWithFaceBook ~ not have data :", data)
        throw 'Something went wrong obtaining access token'
      } else {
        const profile = await Profile.getCurrentProfile()
        console.log('🚀 ~ profile:', profile)
        console.log('this is data includes token: ', data)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  // FB secret code: f8b3b2a9c53d6571285ad12642494f52
  // FB app id: 864070669142714
  // FB client id: c80796450369eaf549eb8aba26d08e8e

  // useEffect(() => {
  //   LoadingPortal.show()
  //   handleGetApiTest()
  //   LoadingPortal.hide()
  // }, [dispatch])

  return (
    <>
      <DefaultActionBar leftIconType="none" title="Login screen" />
      <View
        testID="welcome"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}>
        <Wallet width={24} height={24} />
        {/* <Thumb source={IMAGES.globalImage} style={{height: 200, width: 200}} resizeMode="cover" /> */}
        <Text>Login screen</Text>
        <View style={{width: '100%'}}>
          <InputForm
            defaultValue={value}
            label="email"
            showSubLabel={false}
            onChangeValue={setValue}
          />
          <InputForm
            defaultValue={value}
            password
            label="password"
            showSubLabel={false}
            onChangeValue={setValue}
          />
        </View>
        <Button
          onPress={handleLoginWithGoogle}
          style={{
            backgroundColor: 'white',
            padding: 8,
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            marginTop: 20,
          }}>
          <Text>Login with google</Text>
        </Button>
        <Button
          onPress={handleLoginWithFaceBook}
          style={{
            backgroundColor: 'white',
            padding: 8,
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            marginTop: 20,
          }}>
          <Text>Login with FaceBook</Text>
        </Button>
        <View style={{borderRadius: 16}}>
          <LinearGradientButton
            style={{
              padding: 8,
              alignItems: 'center',
              borderRadius: 16,
              marginTop: 20,
            }}
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
