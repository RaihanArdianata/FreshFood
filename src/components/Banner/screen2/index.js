import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import { color, banner } from '../../../utilities'

const Image = banner.Banner1
const width = Dimensions.get('window').width

export default function Banner2(params) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Image />
      <View style={{marginVertical: 10}}/>
      <Text style={{color: color.light_grey, width: width - width * 20/100, textAlign: "center", fontSize: 16 }}>With one click you can add every ingredient for a recipe to your cart</Text>
    </View>
  )
}