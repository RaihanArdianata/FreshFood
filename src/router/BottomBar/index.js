import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home} from '../../pages'
import {HomeTab} from '../../utilities'

const Tabs = createBottomTabNavigator()

export default function BottomBar(params) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} options={{tabBarIcon: ({ tintColor }) => (
        <HomeTab/>
      )}}/>
      <Tabs.Screen name="Home1" component={Home} options={{tabBarIcon: ({ tintColor }) => (
        <HomeTab/>
      )}}/>
    </Tabs.Navigator>
  )
}