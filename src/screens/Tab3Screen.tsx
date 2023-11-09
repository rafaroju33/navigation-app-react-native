import React, { useEffect } from 'react';
import { Text } from 'react-native';

export const Tab3Screen = () => {
  
  useEffect( () =>{
    console.log('Tab3Screen effect');
  }, []);
  
  return (
    <Text>Tab3Screen</Text>
  )
}
