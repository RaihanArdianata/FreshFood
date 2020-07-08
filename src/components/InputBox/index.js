import React from 'react'
import {View, TextInput} from 'react-native'
import { color, Email, Password, FullName } from '../../utilities'

export default function InputBox(params) {
  console.log(params)
  function icon(value = params.type || 'Email') {
    switch (value) {
      case 'Email':
        return <Email />
      case 'Password':
        return <Password />
      case 'Full Name':
        return <FullName/>
    }
  }
  return (
    <View style={[{ padding: 15, backgroundColor: color.lighter_grey, width: "100%", flexDirection: "row", alignItems: "center", borderRadius: 10 }]}>
      {icon()}
      <TextInput
        style={{ color: color.light_grey, marginHorizontal: 20, width: "100%" }}
        placeholder={params.type}
        placeholderTextColor={color.light_grey}
        secureTextEntry={params.type == "Password"? true : false}
      />
    </View>
  )
}