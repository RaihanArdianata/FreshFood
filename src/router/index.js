import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Splash, Login, Register, Banner } from '../pages'
import BottomBar from './BottomBar'

const Stack = createStackNavigator()

export default function Router(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="Banner" component={Banner} options={{headerShown: false}}/>
      <Stack.Screen name="Fresh-Home" component={BottomBar} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
