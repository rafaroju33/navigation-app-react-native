import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';



export const Tabs = () =>{
  return Platform.OS === 'ios'
      ? <TabsIOS />
      : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      // sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle:{
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 5
        },
        // {color, focused, size}
        tabBarIcon: ({color}) => {
          
          let iconName: string;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'airplane-outline'
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break;
            case 'StackNavigator':
              iconName = 'file-tray-stacked-outline'
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();
export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        // tabBarOptions={{
        //     activeTintColor: 'red'
        // }}
        sceneContainerStyle={{
          backgroundColor: 'white'
        }}
        screenOptions={ ({route}) => ({
          tabBarActiveTintColor: colores.primary,
          tabBarStyle:{
            borderTopColor: colores.primary,
            borderTopWidth: 0,
            elevation: 0
          },
          tabBarLabelStyle: {
            fontSize: 15
          },
          // {color, focused, size}
          tabBarIcon: ({color, focused, size}) => {
            
            let iconName: string = '';

            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'T1';
                break;
              case 'Tab2Screen':
                iconName = 'T2';
                break;
              case 'StackNavigator':
                iconName = 'Stack';
                break;
              default:
                break;
            }
            return <Text style={{color}}>{iconName}</Text>
          }
        })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon: (props) =><Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}