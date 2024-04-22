import React, {memo} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {routes} from './routes'
import IconHome from 'src/assets/icons/IconHome'
import IconGift from 'src/assets/icons/IconGift'
import IconNoti from 'src/assets/icons/IconNoti'
import IconUser from 'src/assets/icons/IconUser'
import {defaultColors} from 'src/configs/colors'

const Tab = ({
  isFocused,
  route,
  options,
  navigation,
}: {
  isFocused: boolean
  route: any
  options: any
  navigation: any
}) => {
  const label = route.name || ''

  const renderIcon = () => {
    if (label === routes.Home) {
      return (
        <IconHome width={36} height={36} color={isFocused ? defaultColors.primary : undefined} />
      )
    }
    if (label === routes.Gift) {
      return (
        <IconGift width={36} height={36} color={isFocused ? defaultColors.primary : undefined} />
      )
    }
    if (label === routes.Notifications) {
      return (
        <IconNoti width={36} height={36} color={isFocused ? defaultColors.primary : undefined} />
      )
    }
    if (label === routes.UserProfile) {
      return (
        <IconUser width={36} height={36} color={isFocused ? defaultColors.primary : undefined} />
      )
    }

    return false
  }
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    })
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    })
  }

  return (
    <>
      {label !== 'ClosedMessage' && (
        <TouchableOpacity
          activeOpacity={0.9}
          accessibilityRole="button"
          //   accessibilityStates={isFocused ? ['selected'] : []}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={[styles.tab]}>
          <View>{renderIcon()}</View>
        </TouchableOpacity>
      )}
    </>
  )
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default memo(Tab)
