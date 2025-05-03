/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
  type LayoutChangeEvent,
  Animated,
  type StyleProp,
  type ViewStyle,
  type ImageProps,
  type ImageStyle,
} from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import {
  TabView,
  type SceneRendererProps,
  type NavigationState,
  TabBar,
  type TabBarItemProps,
  type TabBarIndicatorProps,
} from 'react-native-tab-view'
import {useLocale} from '@react-navigation/native'

const INDICATOR_WIDTH = 161

type State = NavigationState<{key: string; title: string}>
export type Route = {key: string; title: string}

type IndicatorProps = TabBarIndicatorProps<Route> & {
  routes: Route[]
}

const RenderIndicator = (props: IndicatorProps) => {
  const {position, getTabWidth, gap, width, style, routes} = props
  const {direction} = useLocale()

  // Tạo inputRange đều hơn với nhiều điểm hơn
  const inputRange = []
  const outputRange = []

  // Tạo một loạt các điểm từ 0 đến số lượng tab
  for (let i = 0; i < routes.length; i++) {
    // Thêm nhiều điểm hơn cho mỗi tab để animation mượt hơn
    if (i > 0) {
      // Thêm các điểm giữa các tab
      inputRange.push(i - 0.7, i - 0.5, i - 0.3, i - 0.1)

      // Tính toán vị trí tương ứng cho mỗi điểm
      const prevTabWidth = getTabWidth(i - 1)
      const currentTabWidth = getTabWidth(i)
      const prevPosition = (i - 1) * prevTabWidth + (i - 1) * (gap ?? 0)
      const currentPosition = i * currentTabWidth + i * (gap ?? 0)

      // Tính toán vị trí trung gian
      outputRange.push(
        prevPosition + (currentPosition - prevPosition) * 0.3,
        prevPosition + (currentPosition - prevPosition) * 0.5,
        prevPosition + (currentPosition - prevPosition) * 0.7,
        prevPosition + (currentPosition - prevPosition) * 0.9,
      )
    }

    // Thêm điểm chính
    inputRange.push(i)
    outputRange.push(i * getTabWidth(i) + i * (gap ?? 0))
  }

  const translateX = position.interpolate({
    inputRange,
    outputRange: direction === 'rtl' ? outputRange.map(x => -x) : outputRange,
  })

  return (
    <Animated.View
      style={[style, styles.container, {width, transform: [{translateX}]}]}>
      <Animated.View style={[styles.indicator]} />
    </Animated.View>
  )
}

const CustomIndicator = ({
  navigationState,
  position,
  layout,
  getTabWidth,
  gap = 0,
  indicatorStyle,
}) => {
  const {routes} = navigationState

  // Tạo một mảng các giá trị position cho mỗi tab
  const inputRange = routes.map((_, i) => i)

  return (
    <View style={styles.indicatorContainer}>
      {routes.map((_, i) => {
        // Tính vị trí bắt đầu cho mỗi tab
        let startPos = 0
        for (let j = 0; j < i; j++) {
          startPos += getTabWidth(j) + (gap || 0)
        }

        // Tính opacity - chỉ hiển thị indicator cho tab đang active
        const opacity = position.interpolate({
          inputRange: [
            i - 0.5, // Fade in khi gần đến tab này
            i, // Fully visible khi ở tab này
            i + 0.5, // Fade out khi rời khỏi tab này
          ],
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        })

        // Thêm một chút padding cho indicator để tạo margin bên trong
        const tabWidth = getTabWidth(i)
        const indicatorPadding = 4 // Điều chỉnh theo nhu cầu

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={[
              styles.indicator,
              {
                opacity,
                left: startPos + indicatorPadding,
                width: tabWidth - indicatorPadding * 2,
              },
              indicatorStyle,
              // Luôn áp dụng borderRadius cho từng indicator riêng lẻ
              {borderRadius: 100},
            ]}
          />
        )
      })}
    </View>
  )
}

const CustomIndicator1 = ({
  navigationState,
  position,
  getTabWidth,
  gap = 0,
  indicatorStyle,
}: TabBarIndicatorProps<Route> & {
  getTabWidth: (i: number) => number
  gap?: number
  indicatorStyle?: StyleProp<ViewStyle>
}) => {
  const {routes} = navigationState

  // 1) inputRange = [0,1,2,…]
  const inputRange = routes.map((_, i) => i)

  // 2) vị trí x của từng tab
  const outputRangeX = routes.map((_, i) =>
    routes.slice(0, i).reduce((sum, _, j) => sum + getTabWidth(j) + gap, 0),
  )

  // 3) width của từng tab
  const outputRangeW = routes.map((_, i) => getTabWidth(i))

  // 4) tạo interpolation
  const translateX = position.interpolate({
    inputRange,
    outputRange: outputRangeX,
    extrapolate: 'clamp',
  })
  const widthAnim = position.interpolate({
    inputRange,
    outputRange: outputRangeW,
    extrapolate: 'clamp',
  })

  return (
    <View style={styles.indicatorContainer}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: '10%',
            height: '80%',
            borderRadius: 100,
            overflow: 'hidden',
          },
          indicatorStyle,
          {transform: [{translateX}], width: widthAnim},
        ]}
      />
    </View>
  )
}

const CustomIndicator2 = ({
  navigationState,
  position,
  layout,
  getTabWidth,
  gap = 0,
  indicatorStyle,
  direction,
}: TabBarIndicatorProps<Route> & {
  gap?: number
  indicatorStyle?: StyleProp<ViewStyle>
}) => {
  const {routes} = navigationState

  const inputRange = routes.map((_, i) => i)
  const outputRangeX = routes.map((_, i) =>
    routes.slice(0, i).reduce((sum, _, j) => sum + getTabWidth(j) + gap, 0),
  )
  const outputRangeW = routes.map((_, i) => getTabWidth(i))

  // Dịch tới left edge của tab
  const translateX = position.interpolate({
    inputRange,
    outputRange: outputRangeX,
    extrapolate: 'clamp',
  })
  const translateXD =
    direction === 'rtl' ? Animated.multiply(translateX, -1) : translateX

  // Giãn ngang
  const scaleX = position.interpolate({
    inputRange,
    outputRange: outputRangeW,
    extrapolate: 'clamp',
  })

  // **Thêm bước bù 0.5px sau scale**
  const adjustCenter = direction === 'rtl' ? -0.5 : 0.5

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          // base width = 1px
          width: 1,
          height: '80%',
          borderRadius: 100,
          overflow: 'hidden',
          transform: [
            {translateX: translateXD},
            {scaleX},
            {translateX: adjustCenter},
          ],
        },
        indicatorStyle,
      ]}
    />
  )
}

const CustomIndicator3 = ({
  navigationState,
  position,
  getTabWidth,
  gap = 0,
  indicatorStyle,
  direction,
}: TabBarIndicatorProps<Route> & {
  gap?: number
  indicatorStyle?: StyleProp<ImageStyle>
}) => {
  const {routes} = navigationState

  // 1) inputRange = [0,1,2,…]
  const inputRange = routes.map((_, i) => i)

  // 2) outputRangeX = vị trí left của mỗi tab
  const outputRangeX = routes.map((_, i) =>
    routes.slice(0, i).reduce((sum, _, j) => sum + getTabWidth(j) + gap, 0),
  )

  // 3) outputRangeW = width của mỗi tab
  const outputRangeW = routes.map((_, i) => getTabWidth(i))

  // 4) translateX
  const translateX = position.interpolate({
    inputRange,
    outputRange: outputRangeX,
    extrapolate: 'clamp',
  })
  const translateXD =
    direction === 'rtl' ? Animated.multiply(translateX, -1) : translateX

  // 5) scaleX
  const scaleX = position.interpolate({
    inputRange,
    outputRange: outputRangeW,
    extrapolate: 'clamp',
  })

  // 6) adjust center (±0.5px)
  const adjustCenter = direction === 'rtl' ? -0.5 : 0.5

  return (
    <Animated.Image
      // Thay đường dẫn này bằng asset của bạn
      source={{
        uri: 'https://raw.githubusercontent.com/hoangtrunnam/imageForDposApp/refs/heads/master/bo_full_2.jpg',
      }}
      resizeMode="stretch"
      style={[
        {
          width: 1, // must have
          transform: [
            {translateX: translateXD},
            {scaleX},
            {translateX: adjustCenter},
          ],
        },
        { height: '100%', alignItems: 'center', justifyContent: 'center', opacity: 0.7 },
        indicatorStyle,
      ]}
    />
  )
}

const Notifications = () => {
  const layout = useWindowDimensions()
  const {direction} = useLocale()
  const [index, setIndex] = useState(0)
  const [routes, setRoutes] = useState<Route[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [widthItemTabbar, setWidthItemTabbar] = useState<number>(0)

  const renderScene = (
    props: SceneRendererProps & {
      route: Route
    },
  ) => {
    const {route} = props
    return (
      <View style={styles.sceneContainer}>
        <Text>{route.title}</Text>
      </View>
    )
  }

  useEffect(() => {
    const arr = [
      {key: 'first', title: 'First hoang trung nam hy ok 123 123'},
      {key: 'second', title: 'Second wefvf qeqweq'},
      {key: 'third', title: 'third sdfsd'},
      {key: 'forth', title: 'forth sdf'},
      {key: 'fifth', title: 'fifth we sdfe'},
      {key: 'sixth', title: 'sixth'},
      {key: 'seventh', title: 'seventh asdfve'},
    ]

    setIsLoading(true)

    const timer = setTimeout(() => {
      setRoutes(arr)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => {
    const {position, navigationState, jumpTo} = props

    return (
      <TabBar
        {...props}
        style={{backgroundColor: '#fff'}}
        tabStyle={{
          padding: 0,
          width: 'auto', // must have
          marginHorizontal: 28,
          marginVertical: 0,
          height: '100%',
        }}
        scrollEnabled
        activeColor="#ffffff"
        inactiveColor="#000000"
        contentContainerStyle={{
          justifyContent: routes.length === 1 ? 'center' : 'flex-start',
          borderBottomWidth: 0
        }}
        // tabStyle={{
        //   paddingHorizontal: 20,
        // }}
        // renderIndicator={e => <RenderIndicator {...e} routes={routes} />}
        // indicatorStyle={{height: '100%', borderRadius: 100, backgroundColor: 'blue'}}
        renderIndicator={props => <CustomIndicator3 {...props} />}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {!isLoading && (
          <TabView
            style={styles.tabView}
            navigationState={{index, routes: routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            swipeEnabled={true}
            initialLayout={{width: Dimensions.get('window').width}}
          />
        )}
      </View>
      {isLoading && (
        <ActivityIndicator
          size={'large'}
          color={'red'}
          style={{paddingBottom: 50}}
        />
      )}
    </SafeAreaView>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  tabView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  sceneContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  // indicator: {
  //   backgroundColor: 'red',
  //   width: INDICATOR_WIDTH,
  //   height: '100%',
  //   borderRadius: 24,
  //   margin: 6,
  // },
  indicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  indicator: {
    position: 'absolute',
    height: '80%', // Để tạo khoảng cách nhỏ ở trên và dưới
    backgroundColor: 'orange',
    top: '10%', // Canh giữa theo chiều dọc
  },
})
