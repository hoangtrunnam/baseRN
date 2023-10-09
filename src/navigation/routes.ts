import type {RoutesType} from './types';

type Entries<T> = {
  [K in keyof T]: K;
};

export const routes: Entries<RoutesType> = {
  Notifications: 'Notifications',
  BottomTab: 'BottomTab',
  // Screen moi tu day
  // Auth
  SignUp: 'SignUp',
  Gift: 'Gift',
  Home: 'Home',
  Login: 'Login',
  UserProfile: 'UserProfile',
};
