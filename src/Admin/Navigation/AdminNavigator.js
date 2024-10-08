import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import Tabs from './Tabs';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="Main"
          component={Tabs}
          options={{headerShown: false}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

/*
Three Types of Navigators 
1. App Navigator
2. Drawer Navigator
3. Bottom Tab Navigator

One Container is made in app and them its childs are made for further navigations

*/
