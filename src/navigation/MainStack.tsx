import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import React from 'react'
import {Platform} from 'react-native'
import {routes} from './routes'
import type {MainNavigationParamList} from './types'
import Gift from 'src/features/TestApp/Gift'
import Home from 'src/features/TestApp/Home'
import Notifications from 'src/features/TestApp/Notifications'
import UserProfile from 'src/features/TestApp/UserProfile'
import DrawerTab from './DrawerTab'
import DetailCalender from 'src/features/TestApp/DetailCalender'
import Login from 'src/features/TestApp/Login'
import BottomTabFinal from './BottomTabFinal'
const Stack = createStackNavigator<MainNavigationParamList>()

const MainStack: React.FC<any> = () => {
  const transitionPresets = Platform.OS === 'android' ? TransitionPresets.FadeFromBottomAndroid : {}
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          shadowColor: 'transparent',
        },
        ...transitionPresets,
      }}
      initialRouteName={routes.Login}>
      <Stack.Screen
        name={routes.DrawerTab}
        component={DrawerTab}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name={routes.BottomTab}
        component={BottomTabFinal}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen name={routes.Notifications} component={Notifications} />
      <Stack.Screen name={routes.Gift} component={Gift} />
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.UserProfile} component={UserProfile} />
      <Stack.Screen name={routes.DetailCalender} component={DetailCalender} />
      <Stack.Screen name={routes.Login} component={Login} />
    </Stack.Navigator>
  )
}

export default MainStack
