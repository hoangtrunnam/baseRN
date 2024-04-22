/* eslint-disable react-native/no-inline-styles */
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import Tab from './Tab'
import {DIMENSION} from 'src/commons/dimension'
import {defaultColors} from 'src/configs/colors'

export const BOTTOMTAB_HEIGHT = 68

const CustomTabbar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={{position: 'absolute', bottom: -8, left: 0, right: 0}}>
          <View style={styles.shadow}>
            <View
              style={{
                width: '100%',
                height: DIMENSION.isIos ? BOTTOMTAB_HEIGHT : 53,
                backgroundColor: defaultColors.h_ffffff,
              }}
            />
          </View>
        </View>
        <View style={styles.tabContainer}>
          {state.routes.map((route: any, index: any) => (
            <Tab
              key={index}
              {...{
                route,
                isFocused: state.index === index,
                options: descriptors[route.key].options,
                navigation,
              }}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CustomTabbar

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'gray',
    // flex: 1,
  },
  tabContainer: {
    marginTop: 'auto',
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: DIMENSION.hasNotch ? 15 : 0,
    backgroundColor: '#ffffff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
})
