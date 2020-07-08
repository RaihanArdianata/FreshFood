import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native'
import Constant from 'expo-constants'
import { BoxShadow } from 'react-native-shadow'
import { color } from '../../utilities'
import { InputBox, Button as ButtonComp } from '../../components'
import { TouchableHighlight } from 'react-native-gesture-handler'

const width = Dimensions.get('window').width

export default function Login({navigation}) {

  const action = (value) => {
    navigation.navigate(value)
  }

  return (
    <SafeAreaView style={[style.body]}>
      <View style={[style.container, style.shadow, { height: Dimensions.get('window').height - Dimensions.get('window').height * 0.15, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingHorizontal: width - width * 0.85, justifyContent: "space-between", paddingVertical: Constant.statusBarHeight, }]}>
        <Text style={[{ color: color.green, fontSize: 24, fontWeight: "normal", marginTop: width / 10 }]}>Sign In</Text>
        <View style={[]}>
          <InputBox type={'Email'} />
          <View style={{ marginVertical: 10 }} />
          <InputBox type={'Password'} />
          <View style={{ marginVertical: 10 }} />
          <TouchableHighlight style={{ alignSelf: "center" }}>
            <Text style={{ color: color.light_grey }}>Forgot password?</Text>
          </TouchableHighlight>
        </View>
        <View style={[{ width: width - width * 0.150 }]}>
          <ButtonComp title="SIGN IN" action={() => action('Banner')}/>
        </View>
      </View>
      <TouchableHighlight style={[{ alignItems: "center", marginVertical: 30 }]} >
        <Text style={{ color: color.light_grey, fontSize: 16, fontWeight: "bold" }} onPress={()=> navigation.navigate('Register')}>CREATE ACCOUNT</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: color.white
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.white
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  }
})

const shadowStyle = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - Dimensions.get('window').height * 0.25,
  color: "#000000",
  border: 1,
  opacity: 0.05,
  radius: 20,
  x: 0,
  y: 5,
}
