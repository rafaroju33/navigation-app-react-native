import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  // console.log(props)
  //Esto se usa para la version 1.4 o menor al 2 react-native-reanimated
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //     <TouchableOpacity
  //       style={{marginLeft: 10}}
  //       onPress = {() => navigation.toggleDrawer()}
  //     >
  //       <Icon 
  //         name="menu-outline"
  //         color={colores.primary}
  //         size={35}
  //       />
  //     </TouchableOpacity>
  // )
  //   });
  // }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
          // marginLeft: 5
        }}>
        Navegar con Argumentos
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Icon name="body-outline" size={20} color="white" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={20} color="white" />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
