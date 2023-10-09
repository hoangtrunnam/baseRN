import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { useFlipper } from '@react-navigation/devtools'
import {refNavigation} from './navigationHelper';
import MainStack from './MainStack';

const Navigator = () => {
  // @ts-ignore
  // useFlipper(refNavigation)

  return (
    <NavigationContainer ref={refNavigation}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigator;
