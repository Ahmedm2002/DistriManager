import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabs from '../../Navigators/Tabs'

const Main = () => {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})