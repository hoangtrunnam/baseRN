/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import {useDisableBackRoute} from 'src/commons/hooks/useDisableBackRoute'
import {routes} from './routes'
import CustomDrawer from './Component/CustomDrawer'
import Dashboard from 'src/features/Dashboard'

const Drawer = createDrawerNavigator()

const DrawerTab = () => {
  useDisableBackRoute()
  return (
    <Drawer.Navigator
      initialRouteName={routes.Dashboard}
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        // swipeEdgeWidth: 0,
        drawerStyle: {
          width: '75%',
        },
        // drawerType: 'front',
        // swipeEdgeWidth: 0,
        // swipeEnabled: false,
      }}>
      <Drawer.Screen name={routes.Dashboard} component={Dashboard} />
    </Drawer.Navigator>
  )
}

export default DrawerTab
