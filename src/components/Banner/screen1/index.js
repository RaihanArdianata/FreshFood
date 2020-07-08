import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import { color, banner } from '../../../utilities'

const Image = banner.Banner0
const width = Dimensions.get('window').width

export default function Banner1(params) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Image />
      <View style={{marginVertical: 10}}/>
      <Text style={{color: color.light_grey, width: width - width * 20/100, textAlign: "center", fontSize: 16 }}>
        Quickly search and add healthy foods to your cart
      </Text>
    </View>
  )
}