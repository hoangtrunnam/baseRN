import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomTabbar from './CustomTabbar';
import {routes} from './routes';
import type {BottomTabNavigationParamList} from './types';
import Home from '../features/TestApp/Home';
import Gift from '../features/TestApp/Gift';
import Notifications from '../features/TestApp/Notifications';
import UserProfile from '../features/TestApp/UserProfile';
import {useDisableBackRoute} from '../commons/hooks/useDisableBackRoute';

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>();

const BottomTabFinal = () => {
  useDisableBackRoute();
  return (
    <Tab.Navigator
      detachInactiveScreens
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <CustomTabbar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000234',
        tabBarInactiveTintColor: '#993243',
      }}
      initialRouteName={routes.Home}>
      <Tab.Screen name={routes.Home} component={Home} />
      <Tab.Screen name={routes.Gift} component={Gift} />
      <Tab.Screen name={routes.Notifications} component={Notifications} />
      <Tab.Screen name={routes.UserProfile} component={UserProfile} />
    </Tab.Navigator>
  );
};

export default BottomTabFinal;
