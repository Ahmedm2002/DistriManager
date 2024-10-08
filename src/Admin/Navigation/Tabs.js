import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {account, distributors, home, orders} from './Images/index';
import {Account, Distributors, Home, Orders} from '../Screens/index';

const Bottom = createBottomTabNavigator();

function Tabs() {
  return (
    <View style={styles.container}>
      <Bottom.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black',   
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={home}
                  style={[
                    styles.tabImage,
                    {tintColor: tabInfo.focused ? 'black' : 'gray'},
                  ]}
                />
              );
            },
          }}
        />

        <Bottom.Screen
          name="Distributors"
          component={Distributors}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={distributors}
                  style={[
                    styles.tabImage,
                    {tintColor: tabInfo.focused ? 'black' : 'gray'}, 
                  ]}
                />
              );
            },
          }}
        />

        <Bottom.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={orders}
                  style={[
                    styles.tabImage,
                    {tintColor: tabInfo.focused ? 'black' : 'gray'}, 
                  ]}
                />
              );
            },
          }}
        />

        <Bottom.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={account}
                  style={[
                    styles.tabImage,
                    {tintColor: tabInfo.focused ? 'black' : 'gray'}, 
                  ]}
                />
              );
            },
          }}
        />
      </Bottom.Navigator>
    </View>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabImage: {
    width: 22,
    height: 22,
  },
});
