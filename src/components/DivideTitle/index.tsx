/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {StyleProp, View, Text, ViewStyle, TextStyle} from 'react-native'
import {defaultColors} from 'src/configs/colors'

interface DivideTitleProps {
  size?: number
  color?: string
  marginTop?: number
  style?: StyleProp<ViewStyle>
  titleColor?: string
  title: string
  styleTitle?: StyleProp<TextStyle>
}

export const DivideTitle: React.FC<DivideTitleProps> = props => {
  const {
    size = 1,
    color = '#CBCBCB',
    titleColor = defaultColors.h_000000,
    title = '',
    marginTop = 12,
    style,
    styleTitle,
  } = props
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: marginTop,
        },
        style,
      ]}>
      <View style={{flex: 1, width: '100%', backgroundColor: 'red'}}>
        <View
          style={{
            borderBottomWidth: size,
            borderColor: color,
          }}
        />
      </View>
      <Text
        style={[
          {
            fontSize: 16,
            color: titleColor,
            paddingHorizontal: 8,
          },
          styleTitle,
        ]}>
        {title}
      </Text>

      <View style={{flex: 1, width: '100%', backgroundColor: 'red'}}>
        <View
          style={{
            borderBottomWidth: size,
            borderColor: color,
          }}
        />
      </View>
    </View>
  )
}
