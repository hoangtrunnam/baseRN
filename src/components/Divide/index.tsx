/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {StyleSheet, View} from 'react-native'

interface DivideProps {
  size?: number
  color?: string
}

export const Divide: React.FC<DivideProps> = ({size = StyleSheet.hairlineWidth, color}) => {
  return <View style={{width: '100%', height: size, backgroundColor: color || '#E0E1E0'}} />
}
