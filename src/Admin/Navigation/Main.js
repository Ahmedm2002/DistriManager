import { StyleSheet, View } from 'react-native'
import React from 'react'
import AdminTabs from './AdminTabs'

const Main = () => {
  return (
    <View style={styles.container}>
      <AdminTabs />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})