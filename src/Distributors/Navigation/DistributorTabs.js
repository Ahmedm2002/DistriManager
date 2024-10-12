import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {account, distributors, home, orders} from '../../../assests/index';


const BottomTabs = createBottomTabNavigator()

const DistributorTabs = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen 
              
      />
    </BottomTabs.Navigator>
  )
}

export default DistributorTabs