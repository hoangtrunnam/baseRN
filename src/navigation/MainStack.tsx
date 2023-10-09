import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import React from 'react'
import {Platform} from 'react-native'
import {routes} from './routes'
import type {MainNavigationParamList} from './types'
import Gift from '../features/TestApp/Gift'
import Home from '../features/TestApp/Home'
import Login from '../features/TestApp/Login'
import Notifications from '../features/TestApp/Notifications'
import UserProfile from '../features/TestApp/UserProfile'
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
        name={routes.BottomTab}
        component={BottomTabFinal}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen name={routes.Notifications} component={Notifications} />
      <Stack.Screen name={routes.Login} component={Login} />
      <Stack.Screen name={routes.Gift} component={Gift} />
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.UserProfile} component={UserProfile} />
    </Stack.Navigator>
  )
}

export default MainStack
