import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Logo from '../../../assets/images/logo.svg'
import { color } from '../../utilities'

export default function Splash({navigation}) {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('Login')
    }, 1000)
  })
  return (
    <View style={styles.container}>
      <Logo></Logo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});