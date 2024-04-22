/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {Text, View} from 'react-native'
const toastStatus = {
  success: {
    icon: <Text>oki</Text>,
    backgroundColor: 'green',
  },
  error: {
    icon: <Text>oki</Text>,
    backgroundColor: '#CE2B22',
  },
  warning: {
    icon: <Text>oki</Text>,
    backgroundColor: '#FF6E00',
  },
}

interface ToastProps {
  status: 'success' | 'error' | 'warning'
  title: any
}
const ToastMessage = ({status = 'success', title}: ToastProps) => {
  const {message} = title
  if (status !== 'success' && status !== 'error' && status !== 'warning') {
    return null
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          width: '90%',
          backgroundColor: 'red',
          paddingHorizontal: 14,
          paddingVertical: 12,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>{toastStatus[status].icon}</View>
          <View style={{marginRight: 4}}>
            <Text style={{color: '#ffffff', marginLeft: 10}}>{message}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ToastMessage
