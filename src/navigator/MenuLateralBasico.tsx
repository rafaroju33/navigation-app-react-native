import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  
  const {width} = useWindowDimensions();

  console.log(width)

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 683 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Article" options={{title: 'settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
