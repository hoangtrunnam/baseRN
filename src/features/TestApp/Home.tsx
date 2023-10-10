/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native'
import Toast from 'react-native-toast-message'
import React, {useEffect, useState} from 'react'
import {useAppSelector} from 'src/redux/hooks'
import {selectAuth} from 'src/redux/Auth/slice'
import InputForm from 'src/components/Input/InputForm'
import InputFormNoBorder from 'src/components/Input/InputFormNoBorder'

const Home = () => {
  const {is_verified_email} = useAppSelector(selectAuth)
  const [value, setValue] = useState<string>('')
  const [someThing, setSomeThing] = useState<string>('')

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
      <Text>value: {value}</Text>
      <Text>someThing: {someThing}</Text>
      <View style={{width: '100%'}}>
        <InputForm
          defaultValue={value}
          password
          label="email"
          showSubLabel={false}
          onChangeValue={setValue}
        />
      </View>
      <View style={{marginTop: 24, width: '100%'}}>
        <InputFormNoBorder defaultValue="12" label="something" onChangeValue={setSomeThing} />
      </View>
    </View>
  )
}

export default Home
