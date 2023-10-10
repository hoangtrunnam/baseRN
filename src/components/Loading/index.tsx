import React, {memo} from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'

function Loading() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#FB8C00" />
    </View>
  )
}

export default memo(Loading)

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    flex: 1,
    zIndex: 999,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})
