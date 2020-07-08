import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { color, Arrow } from '../../utilities'
import {Button } from 'native-base';

export default function ButtonCustome({title, action}) {
  const type = title
  return (
    <Button style={[{ padding: 15, backgroundColor: color.green, borderRadius: 10, justifyContent: "center" }]} onPress={action}>
      <Text style={[{ color: "#ffffff", marginHorizontal: 10 }]}> <Arrow /> {type}</Text>
    </Button>
    // <TouchableHighlight style={[{ padding: 15, backgroundColor: color.green, borderRadius: 10, }]}>
    //   <View style={[{ color: "#ffffff", alignItems: "center", justifyContent: "center", flexDirection: "row" }]}>
    //     <Arrow />
    //     <Text style={[{ color: "#ffffff", marginHorizontal: 10 }]}>SIGN IN</Text>
    //   </View>
    // </TouchableHighlight>
  )
}
