/* eslint-disable react-native/no-inline-styles */
import moment from 'moment'
import React, {memo} from 'react'
import {Text, View} from 'react-native'
import type {Style} from './index'
import type {Day_Type} from './Utils/data'
import type {LOCALE_TYPE} from './Utils/locale'

interface Props {
  day: Day_Type
  locale: LOCALE_TYPE
  disabledBeforeToday?: boolean
  style?: Style
}

function Day({day, locale, disabledBeforeToday, style}: Props) {
  const {date, type, isHoliday, isToday, isBeforeToday} = day

  const dayTextColor = style?.dayTextColor || '#1d1c1d'
  const holidayColor = style?.holidayColor || '#f26522'
  const todayColor = style?.todayColor || '#1692e4'
  const selectedDayTextColor = style?.selectedDayTextColor || '#fff'
  const disabledTextColor = style?.disabledTextColor || '#ccc'
  const selectedDayBackgroundColor = style?.selectedDayBackgroundColor || '#83bc44'
  const selectedBetweenDayTextColor = style?.selectedBetweenDayTextColor || '#1d1c1d'
  const selectedBetweenDayBackgroundTextColor =
    style?.selectedBetweenDayBackgroundTextColor || '#F2F2F2'

  let markStyle: any = {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
  const betweenStyle: any = {
    width: '50%',
    height: 30,
    position: 'absolute',
    backgroundColor: selectedBetweenDayBackgroundTextColor,
  }
  let dayStyle: any = {
    color:
      disabledBeforeToday && isBeforeToday
        ? disabledTextColor
        : isToday
        ? todayColor
        : isHoliday
        ? holidayColor
        : dayTextColor,
  }

  switch (type) {
    case 'single':
      markStyle = {
        ...markStyle,
        backgroundColor: selectedDayBackgroundColor,
        borderRadius: 15,
      }
      dayStyle = {color: selectedDayTextColor}
      break
    case 'start':
      markStyle = {
        ...markStyle,
        backgroundColor: selectedDayBackgroundColor,
        borderRadius: 15,
      }
      dayStyle = {color: selectedDayTextColor}
      break
    case 'end':
      markStyle = {
        ...markStyle,
        backgroundColor: selectedDayBackgroundColor,
        borderRadius: 15,
      }
      dayStyle = {color: selectedDayTextColor}
      break
    case 'between':
      markStyle = {
        ...markStyle,
        backgroundColor: selectedBetweenDayBackgroundTextColor,
        width: '101%',
      }
      dayStyle = {
        color: isToday ? todayColor : isHoliday ? holidayColor : selectedBetweenDayTextColor,
      }

      break

    default:
      break
  }

  return (
    <>
      {type === 'end' ? <View style={[betweenStyle, {left: -1}]} /> : null}
      {type === 'start' ? <View style={[betweenStyle, {right: -1}]} /> : null}
      {date ? (
        <View style={markStyle}>
          <Text style={[{fontSize: 15}, dayStyle, style?.dayText]}>{moment(date).date()}</Text>
        </View>
      ) : null}
      {isToday ? <Text style={[{fontSize: 12}, {color: todayColor}]}>{locale.today}</Text> : null}
    </>
  )
}

function areEqual(prevProps: Props, nextProps: Props) {
  if (prevProps.day.type === nextProps.day.type) {
    return true
  }
  return false
}

export default memo(Day, areEqual)
