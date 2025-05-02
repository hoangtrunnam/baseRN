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
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {
  TabView,
  type SceneRendererProps,
  type NavigationState,
  TabBar,
  type TabBarItemProps,
  type TabBarIndicatorProps,
} from 'react-native-tab-view'
import { useLocale } from '@react-navigation/native'

const INDICATOR_WIDTH = 161

type State = NavigationState<{key: string; title: string}>
export type Route = {key: string; title: string}

type IndicatorProps = TabBarIndicatorProps<Route> & {
  routes: Route[];
};

const RenderIndicator = (props: IndicatorProps) => {
  const { position, getTabWidth, gap, width, style, routes } = props;
  const { direction } = useLocale();

  console.log('hahahahah: ', getTabWidth(1))
  
  // Tạo inputRange đều hơn với nhiều điểm hơn
  const inputRange = [];
  const outputRange = [];
  
  // Tạo một loạt các điểm từ 0 đến số lượng tab
  for (let i = 0; i < routes.length; i++) {
    // Thêm nhiều điểm hơn cho mỗi tab để animation mượt hơn
    if (i > 0) {
      // Thêm các điểm giữa các tab
      inputRange.push(i - 0.7, i - 0.5, i - 0.3, i - 0.1);
      
      // Tính toán vị trí tương ứng cho mỗi điểm
      const prevTabWidth = getTabWidth(i - 1);
      const currentTabWidth = getTabWidth(i);
      const prevPosition = (i - 1) * prevTabWidth + (i - 1) * (gap ?? 0);
      const currentPosition = i * currentTabWidth + i * (gap ?? 0);
      
      // Tính toán vị trí trung gian
      outputRange.push(
        prevPosition + (currentPosition - prevPosition) * 0.3,
        prevPosition + (currentPosition - prevPosition) * 0.5,
        prevPosition + (currentPosition - prevPosition) * 0.7,
        prevPosition + (currentPosition - prevPosition) * 0.9
      );
    }
    
    // Thêm điểm chính
    inputRange.push(i);
    outputRange.push(i * getTabWidth(i) + i * (gap ?? 0));
  }

  const translateX = position.interpolate({
    inputRange,
    outputRange: direction === 'rtl' ? outputRange.map(x => -x) : outputRange,
  });

  return (
    <Animated.View
      style={[
        style,
        styles.container,
        { width, transform: [{ translateX }] },
      ]}
    >
      <Animated.View
        style={[styles.indicator]}
      />
    </Animated.View>
  );
};

const Notifications = () => {
  const layout = useWindowDimensions()
  const { direction } = useLocale();
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
      <View>
        <Text>haha</Text>
      </View>
    )
  }

  useEffect(() => {
    const arr = [
      {key: 'first', title: 'First hoang trung nam hy'},
      {key: 'second', title: 'Second wefvf qeqweq'},
      {key: 'third', title: 'third sdfsd'},
      {key: 'forth', title: 'forth sdf'},
      {key: 'fifth', title: 'fifth we sdfe'},
      {key: 'sixth', title: 'sixth'},
      {key: 'seventh', title: 'seventh asdfve'},
    ]
    // setRoutes(arr)

    setIsLoading(true)
    console.log('hahaha')

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
    const inputRange = routes.map((_, i) => i)
    // console.log('🚀 ~ Notifications ~ position:', position)

    position.addListener(event => {
      const {value} = event
      // console.log('🚀 ~ Notifications ~ index:', value)
      // refTabBar.current?.scrollToIndex(index)
    })

    return (
      <TabBar
        {...props}
        scrollEnabled
        // style={{backgroundColor: '#fff'}}
        contentContainerStyle={{
          // This will center the tab if there's only one
          justifyContent: routes.length === 1 ? 'center' : 'flex-start',
        }}
        tabStyle={{
          // width: routes.length === 1 ? layout.width : INDICATOR_WIDTH, // Allow tabs to size based on content
          paddingHorizontal: 20, // Add some padding around text
          // width: 'auto'
        }}
        // indicatorStyle={{
        //   height: '100%',
        //   backgroundColor: 'blue',
        //   borderRadius: 20,
        //   // width: 'auto',
        //   width: INDICATOR_WIDTH
        // }}
        // indicatorContainerStyle={{
        //   width: 'auto',
        //   // backgroundColor: 'red',
        // }}
        renderIndicator={e => <RenderIndicator {...e} routes={routes} />}
        // gap={20}
        renderTabBarItem={(
          item: TabBarItemProps<{key: string; title: string}>,
        ) => {
          const isFocused =
            navigationState.index ===
            navigationState.routes.findIndex(
              (r: {key: string}) => r.key === item.route.key,
            )
          // animation

          return (
            <TouchableOpacity
              onPress={() => {
                jumpTo(item.route.key)
              }}
              onLayout={(event: LayoutChangeEvent) => {
                console.log('envettttt', event.nativeEvent.layout.width)
                setWidthItemTabbar(event.nativeEvent.layout.width)
              }}
              style={{
                width: INDICATOR_WIDTH,
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
                // marginHorizontal: 20
              }}>
              <Text
                numberOfLines={1}
                style={[
                  {fontWeight: '600', fontSize: 16},
                  {color: isFocused ? '#dbe5f2' : '#000'},
                ]}>
                {item.route.title}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, width: '100%', backgroundColor: '#fff'}}>
        {!isLoading && (
          <TabView
            style={{flex: 1, width: '100%', backgroundColor: '#fff'}}
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
  tab: {
    // width: INDICATOR_WIDTH, // marginHorizontal: 20, // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'red',
    width: INDICATOR_WIDTH,
    height: '100%',
    borderRadius: 24,
    margin: 6,
  },
})
