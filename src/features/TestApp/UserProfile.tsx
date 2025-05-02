import {Text} from '@react-navigation/elements'
import {useLocale} from '@react-navigation/native'
import * as React from 'react'
import {Animated, Pressable, StyleSheet, View} from 'react-native'
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import {
  type NavigationState,
  SceneMap,
  type SceneRendererProps,
  TabView,
} from 'react-native-tab-view'

type Route = {
  key: string
  title: string
}

type State = NavigationState<Route>

const UserProfile = () => {
  const {direction} = useLocale()
  const insets = useSafeAreaInsets()
  const [index, onIndexChange] = React.useState(0)
  const [routes] = React.useState<Route[]>([
    {key: 'contacts', title: 'Contacts'},
    {key: 'albums', title: 'Albums'},
    {key: 'article', title: 'Article'},
    {key: 'chat', title: 'Chat'},
  ])

  const renderScene = (
    props: SceneRendererProps & {
      route: Route
    },
  ) => {
    const {route} = props
    return (
      <View>
        <Text>haha</Text>
      </View>
    )
  }

  const renderItem =
    ({
      navigationState,
      position,
    }: {
      navigationState: State
      position: Animated.AnimatedInterpolation<number>
    }) =>
    ({route, index}: {route: Route; index: number}) => {
      const inputRange = navigationState.routes.map((_, i) => i)

      const activeOpacity = position.interpolate({
        inputRange,
        outputRange: inputRange.map((i: number) => (i === index ? 1 : 0)),
      })
      const inactiveOpacity = position.interpolate({
        inputRange,
        outputRange: inputRange.map((i: number) => (i === index ? 0 : 1)),
      })

      return (
        <View style={[styles.tab]}>
          <Animated.View style={[styles.item, {opacity: inactiveOpacity}]}>
            <Text style={[styles.label, styles.inactive]}>{route.title}</Text>
          </Animated.View>
          <Animated.View
            style={[styles.item, styles.activeItem, {opacity: activeOpacity}]}>
            <Text style={[styles.label, styles.active]}>{route.title}</Text>
          </Animated.View>
        </View>
      )
    }

  const renderTabBar: React.ComponentProps<
    typeof TabView<Route>
  >['renderTabBar'] = props => (
    <View
      style={[
        styles.tabbar,
        {
          paddingBottom: insets.bottom,
          paddingStart: insets.left,
          paddingEnd: insets.right,
        },
      ]}>
      {props.navigationState.routes.map((route: Route, index: number) => {
        return (
          <Pressable key={route.key} onPress={() => props.jumpTo(route.key)} style={{backgroundColor: 'red'}}>
            {renderItem(props)({route, index})}
          </Pressable>
        )
      })}
    </View>
  )

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TabView<Route>
        navigationState={{
          index,
          routes,
        }}
        direction={direction}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={onIndexChange}
      />
    </View>
    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4.5,
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    start: 0,
    end: 0,
    bottom: 0,
  },
  active: {
    color: '#0084ff',
  },
  inactive: {
    color: '#939393',
  },
  icon: {
    height: 26,
    width: 26,
  },
  label: {
    fontSize: 10,
    marginTop: 3,
    marginBottom: 1.5,
    backgroundColor: 'transparent',
  },
})
