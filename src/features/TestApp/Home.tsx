/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native'
import Toast from 'react-native-toast-message'
import React, {useEffect} from 'react'
import {useAppSelector} from 'src/redux/hooks'
import {selectAuth} from 'src/redux/Auth/slice'

const Home = () => {
  const {is_verified_email} = useAppSelector(selectAuth)

  console.log('is_verified_email', is_verified_email)
  useEffect(() => {
    Toast.show({
      type: 'error',
      text1: 'Có gì đó đang xảy ra',
    })
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  )
}

export default Home
