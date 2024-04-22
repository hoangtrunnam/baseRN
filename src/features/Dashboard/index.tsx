import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {defaultColors} from 'src/configs/colors'
import {useDisableBackRoute} from 'src/commons/hooks/useDisableBackRoute'

const Dashboard = () => {
  useDisableBackRoute()

  return (
    <View testID="_homescreen" style={styles.containerAll}>
      <Text>hahaha</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  containerAll: {backgroundColor: defaultColors.h_ffffff, flex: 1},
})
