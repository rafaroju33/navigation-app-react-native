import React from 'react';
import { Text, useWindowDimensions, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

// Para colocar el encabezado de Settings, se debe color SettingsStackScreen en el codigo1
const Stack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  )
}

export const MenuLateral = () => {
    const { width, height } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= height ? 'permanent' : 'front'
            }}
            drawerContent={ (props) => <MenuInterno { ...props } /> }
        >
        <Drawer.Screen name="Tabs" component={ Tabs } />
        <Drawer.Screen name="SettingsScreen" component={ SettingsStackScreen } /> 
        </Drawer.Navigator>
    );
}

const MenuInterno =({navigation}:DrawerContentComponentProps<DrawerContentComponentProps>)=>{
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="navigate-circle-outline" size={22} color="black" />
          <Text style={styles.menuTexto}> Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={22} color="black" />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
    );
}
