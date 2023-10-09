/* eslint-disable react-native/no-inline-styles */
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import Tab from './Tab';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const BOTTOMTAB_HEIGHT = 115;

const CustomTabbar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={{position: 'absolute', bottom: -15, left: 0, right: 0}}>
          {/* <Androw style={styles.shadow}>
            <Svgs.BgTabbar
              width="100%"
              height={BOTTOMTAB_HEIGHT}
              color={defaultColors.h_ffffff}
            />
          </Androw> */}
        </View>
        {/* <View style={StyleSheet.absoluteFill}> */}
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
      {/* </View> */}
    </SafeAreaView>
  );
};

export default CustomTabbar;

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
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    // backgroundColor: 'red'
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
});
