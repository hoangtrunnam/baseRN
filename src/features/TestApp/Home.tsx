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
import i18n from 'src/locales/i18n'
import {useColors, useLanguage, useTheme} from 'src/locales/AppContext'
import {AlertProvider} from 'src/components/Alert'
import type {MainStackScreenNavigationProps} from 'src/navigation/types'
import {routes} from 'src/navigation/routes'

interface ILogin extends MainStackScreenNavigationProps<'Home'> {}

const Home = ({navigation}: ILogin) => {
  const {is_verified_email} = useAppSelector(selectAuth)
  const colors = useColors()
  const setTheme = useTheme()
  const [value, setValue] = useState<string>('')
  const [someThing, setSomeThing] = useState<string>('')
  const modalizeRef = useRef<any>(null)

  const {language, setLanguage} = useLanguage()
  i18n.locale = language

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

  const onOpenAlert = () => {
    AlertProvider.show({
      title: 'Xin chào tất cả mọi người',
      content: 'Đây là code base do Nam Hoàng phát triển <3',
      actions: [
        {
          text: 'No',
          onPress: () => {
            console.log('press cancel')
          },
        },
        {
          text: 'Okay',
          onPress: () => {
            console.log('press ok')
          },
        },
      ],
    })
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}>
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
        <InputFormNoBorder
          defaultValue=""
          label="type some thing here"
          onChangeValue={setSomeThing}
        />
      </View>
      <Text>multi lang: {i18n.t('languages.vi')}</Text>
      <View>
        <TouchRippleSingle
          onPress={() => {
            setLanguage('vi')
            setTheme('light')
          }}>
          <Text>press to change to vi and light theme</Text>
        </TouchRippleSingle>
      </View>
      <View>
        <TouchRippleSingle
          onPress={() => {
            setLanguage('en')
            setTheme('dark')
          }}>
          <Text>press to change to en and dark theme</Text>
        </TouchRippleSingle>
      </View>
      <View>
        <TouchRippleSingle onPress={onOpen}>
          <Text>press to open modal</Text>
        </TouchRippleSingle>
      </View>
      <View>
        <TouchRippleSingle onPress={onOpenAlert}>
          <Text>Alert</Text>
        </TouchRippleSingle>
      </View>
      <View>
        <TouchRippleSingle
          onPress={() => {
            navigation.navigate(routes.DetailCalender)
          }}>
          <Text>Calender</Text>
        </TouchRippleSingle>
      </View>
      <ModalTest ref={modalizeRef} />
    </View>
  )
}

export default Home
