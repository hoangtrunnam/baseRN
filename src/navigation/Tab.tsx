import React, {memo} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {routes} from './routes'

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
      return <Text>img1</Text>
    }
    if (label === routes.Gift) {
      return <Text>img1</Text>
    }
    if (label === routes.Notifications) {
      return <Text>img1</Text>
    }
    if (label === routes.UserProfile) {
      return <Text>img1</Text>
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
          style={[styles.tab, label === routes.Home && styles.tabHome]}>
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
  tabHome: {
    marginTop: -30,
  },
})

export default memo(Tab)
