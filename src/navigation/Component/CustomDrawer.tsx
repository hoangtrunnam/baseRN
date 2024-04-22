/* eslint-disable react-native/no-inline-styles */
import {DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer'
import React from 'react'
import {StyleSheet, View, Text, Pressable, FlatList} from 'react-native'
import {IListDashBoard, ListItemDashBoard} from 'src/constants/webUrl'
import {routes} from '../routes'
import {Divide} from 'src/components/Divide'
import {TouchRippleSingle} from 'src/components/Button/TouchRippleSingle'
import Logout from 'src/assets/icons/Logout'
import {useNavigation} from '@react-navigation/native'
import {defaultColors} from 'src/configs/colors'
import {Thumb} from 'src/components/Image'
import {IMAGES} from 'src/assets/images'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation()
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user-profile')
      await AsyncStorage.removeItem('token')
      navigation.navigate(routes.Login)
    } catch (error) {
      console.log(error)
    }
  }

  const renderListCategory = ({item}: {item: IListDashBoard}) => {
    const {label, iconSvg, isTextGray} = item
    return (
      <View style={styles.categoryItem}>
        <TouchRippleSingle onPress={() => {}}>
          <View style={styles.categoryItemContent}>
            <Thumb source={iconSvg} style={styles.categoryIcon} />
            <Text
              style={[
                styles.categoryLabel,
                {
                  color: isTextGray ? defaultColors.h_898988 : defaultColors.h_666666,
                  fontWeight: isTextGray ? '400' : '600',
                },
              ]}>
              {label}
            </Text>
          </View>
        </TouchRippleSingle>
        <Divide marginTop={16} />
      </View>
    )
  }

  const renderCategoryByType = () => {
    return (
      <FlatList
        testID="_listCategoryItem"
        data={ListItemDashBoard}
        keyExtractor={item => item.id.toString()}
        renderItem={item => renderListCategory(item)}
      />
    )
  }

  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView testID="_drawerScrollView" nestedScrollEnabled={true} {...props}>
        <Text style={[styles.sectionTitle]}>メニュー</Text>
        {renderCategoryByType()}
        <View style={styles.contactContainer}>
          <TouchRippleSingle testID="_drawerHelpButton" onPress={() => {}}>
            <View style={styles.listItem}>
              <Thumb source={IMAGES.inquiry} style={styles.icon} />
              <Text style={styles.listItemText}>お問い合わせ</Text>
            </View>
          </TouchRippleSingle>
          <Divide marginTop={16} />
        </View>
        <View style={styles.logoutContainer}>
          <TouchRippleSingle testID="_btnManualPdf" onPress={() => {}}>
            <View style={styles.listItem}>
              <Thumb source={IMAGES.inquiry} style={styles.icon} />
              <Text style={styles.listItemText}>使い方マニュアル</Text>
            </View>
          </TouchRippleSingle>
          <Divide marginTop={16} />
        </View>
        <View style={styles.logoutContainer}>
          <Pressable onPress={handleLogout}>
            <View style={styles.listItem}>
              <Logout />
              <Text style={styles.listItemText}>ログアウト</Text>
            </View>
          </Pressable>
          <Divide marginTop={16} />
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  zoneIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 16,
  },
  contactContainer: {
    marginTop: 64,
  },
  logoutContainer: {
    marginTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  listItemText: {
    marginLeft: 16,
    color: defaultColors.h_666666,
    fontSize: 14,
  },
  categoryItem: {
    marginTop: 16,
  },
  categoryItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  categoryIcon: {
    width: 20,
    height: 20,
  },
  categoryLabel: {
    marginLeft: 16,
    color: defaultColors.h_666666,
    fontSize: 14,
    fontWeight: '600',
  },
})
