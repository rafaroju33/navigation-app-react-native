import React, { ReactElement } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const {top:paddingTop} = useSafeAreaInsets()

  return (
    <Tab.Navigator
      style = {{ paddingTop }}
      sceneContainerStyle = {{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle:{
          borderTopColor: colores.primary,
          // borderTopWidth:2,
          elevation:0  
        },
        tabBarIcon: ({color}) => {
          let iconName:string;
          switch (route.name) {
            case 'Chat':
              iconName = 'airplane-outline';
              break;
 
            case 'Contacts':
              iconName = 'airplane-outline';
              break;
 
            case 'Albums':
              iconName = 'airplane-outline';
              break;
          }
          return <Icon name={ iconName } size={20} color={color} />;
        },
      })}


    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
    </Tab.Navigator>
  );
}