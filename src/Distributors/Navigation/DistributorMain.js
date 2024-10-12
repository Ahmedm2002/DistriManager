import { StyleSheet, View } from 'react-native'
import React from 'react'
import DistributorTabs from '../Navigation/DistributorTabs'

const DistributorMain= () => {
  return (
    <View style={styles.container}>
      <DistributorTabs />
    </View>
  )
}

export default DistributorMain

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})