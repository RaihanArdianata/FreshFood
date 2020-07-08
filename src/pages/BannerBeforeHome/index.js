import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native'
import Constant from 'expo-constants'
import { color} from '../../utilities'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Carousel from 'react-native-banner-carousel'
import {Banner, Button as ButtonComp} from '../../components'

const width = Dimensions.get('window').width


export default function BannerCarousel({ navigation }) {

  const action = (value) => {
    value ? navigation.replace(value) : alert('Under Construct')
  }

  return (
    <SafeAreaView style={[style.body]}>
      <View style={[style.container, style.shadow, { height: Dimensions.get('window').height - Dimensions.get('window').height * 0.15, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingHorizontal: width - width * 0.85, justifyContent: "space-between", paddingVertical: Constant.statusBarHeight, }]}>
        <View style={{justifyContent: "center"}}>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={width}
          >
            {Banner.map((Image, index) =>
              <Image/>
             )
            }
          </Carousel>
        </View>
      </View>
      <View style={{width: width, alignItems: "center", marginVertical: 20}}>
        <View style={[{ width: width - width * 0.40 }]}>
          <ButtonComp title="GET STARTED" action={()=> action('Fresh-Home') }/>
        </View>
      </View>
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
