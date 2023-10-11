/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native'
import Toast from 'react-native-toast-message'
import React, {useEffect, useRef, useState} from 'react'
import {useAppSelector} from 'src/redux/hooks'
import {selectAuth} from 'src/redux/Auth/slice'
import InputForm from 'src/components/Input/InputForm'
import InputFormNoBorder from 'src/components/Input/InputFormNoBorder'
import {TouchRippleSingle} from 'src/components/Button/TouchRippleSingle'
import ModalTest from './ModalTest'

const Home = () => {
  const {is_verified_email} = useAppSelector(selectAuth)
  const [value, setValue] = useState<string>('')
  const [someThing, setSomeThing] = useState<string>('')
  const modalizeRef = useRef<any>(null)

  console.log('is_verified_email', is_verified_email)
  useEffect(() => {
    Toast.show({
      type: 'error',
      text1: 'Có gì đó đang xảy ra',
    })
  }, [])

  const onOpen = () => {
    console.log('run here')
    modalizeRef.current?.openModal()
  }

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
      <View>
        <TouchRippleSingle onPress={onOpen}>
          <Text>press to open modal</Text>
        </TouchRippleSingle>
      </View>
      <ModalTest ref={modalizeRef} />
    </View>
  )
}

export default Home
