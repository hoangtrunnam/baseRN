import {Animated, FlatList, StyleSheet, Text, View} from 'react-native'
import React, {useMemo, useRef} from 'react'
import {Button} from 'src/components/Button'
import type {Route} from './Notifications'

interface IProps {
  data: Route[]
  onChangeTab: (tab: Route, index: number) => void
  tabSelected: Route
}

const ListHeaderTabs = React.forwardRef((props: IProps, ref) => {
  const {data, onChangeTab, tabSelected} = props
  console.log('🚀 ~ ListHeaderTabs ~ data:', data)
  const refTabList = useRef<FlatList>(null)
  const flatListscrollOffsetYValue = useRef(new Animated.Value(0)).current

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: (index: number) => {
      refTabList.current?.scrollToIndex({index, animated: true})
    },
    // scrollToItem: _item => {
    //   // refTabList.current?.scrollToItem({ item, animated: true });
    // },
  }))

  const onScroll = useMemo(() => {
    return Animated.event(
      [{nativeEvent: {contentOffset: {y: flatListscrollOffsetYValue}}}],
      {
        listener: event => {},
        useNativeDriver: true,
      },
    )
  }, [])

  const handlePressItem = (item: Route, index: number) => {
    !!refTabList?.current?.scrollToItem &&
      refTabList?.current?.scrollToItem?.({item: item})
    !!onChangeTab && onChangeTab?.(item, index)
  }

  const renderItem = ({item, index}: {item: Route; index: number}) => {
    const isFocused = item.key === tabSelected.key
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 8,
        }}>
        <Button
          style={{
            borderRadius: 12,
            backgroundColor: 'orange',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handlePressItem(item, index)}>
          <Text style={{color: '#fff', paddingHorizontal: 12}}>{item.title}</Text>
          {isFocused && (
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'red',
                borderRadius: 12,
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                opacity: 0.5,
              }}
            />
          )}
        </Button>
      </View>
    )
  }
  const renderItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 5,
          width: '100%',
          backgroundColor: '#f2f2f2',
        }}
      />
    )
  }
  return (
    <View>
      <Animated.FlatList
        ref={refTabList}
        // onScroll={onScroll}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        data={data || []}
        renderItem={renderItem}
        style={{backgroundColor: '#eeeeee'}}
        // ItemSeparatorComponent={renderItemSeparatorComponent}
        onEndReachedThreshold={0.001}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        extraData={data}
        scrollEnabled
        //
      />
    </View>
  )
})

export default ListHeaderTabs

const styles = StyleSheet.create({})
