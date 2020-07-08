import React from 'react'
import {SafeAreaView, View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native'
import {Button, Icon, Footer, FooterTab, Content} from 'native-base'
import {color} from '../../utilities'
import Constant from 'expo-constants'

const width = Dimensions.get('window').width

export default function Home(params) {
  return (
    <SafeAreaView style={[style.body]}>
      <ScrollView>
        <View style={[style.container, style.shadow, { height: Dimensions.get('window').height - Dimensions.get('window').height * 0.5, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingHorizontal: width - width * 0.85, paddingVertical: Constant.statusBarHeight, marginBottom: 5 }]} >
          <Text>Hellowww</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: color.white
  },
  container: {
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