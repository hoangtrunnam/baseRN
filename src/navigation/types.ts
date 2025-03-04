import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import type {StackScreenProps} from '@react-navigation/stack'

export type BottomTabNavigationParamList = {
  Home: undefined
  Gift: undefined
  Notifications: undefined
  UserProfile: undefined
}

export type MainNavigationParamList = {
  BottomTab: NavigatorScreenParams<BottomTabNavigationParamList>
  Notifications: Record<string, any> | undefined

  // Screen moi tu day

  // Auth
  SignUp: undefined
  Gift: undefined
  Home: undefined
  Login: {value: number}
  UserProfile: undefined
  DetailCalender: undefined
  ConfirmMail: {value: number}
}

export type RoutesType = BottomTabNavigationParamList & MainNavigationParamList

export type BottomScreenNavigationProps<
  T extends keyof BottomTabNavigationParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabNavigationParamList, T>,
  MainStackScreenNavigationProps<keyof MainNavigationParamList>
>

export type MainStackScreenNavigationProps<
  T extends keyof MainNavigationParamList,
> = StackScreenProps<MainNavigationParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainNavigationParamList {}
  }
}
