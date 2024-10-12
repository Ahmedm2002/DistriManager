import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../../Components/Splash'
import Login from '../Auth/Login'
import { Screen } from 'react-native-screens'
import Signup from '../Auth/Signup'
import DistributorTabs from './DistributorTabs'

const Stack = createStackNavigator();

const DistributorNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Screen.Screen
          name="distributorMain"
          component={DistributorTabs}
          options = {{headerShown : false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default DistributorNavigation