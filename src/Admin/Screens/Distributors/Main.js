import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import Search from './Search';
import DistributorList from './DistributorsList';
import addNew from '../../Images/addNew.png';

function Main() {
  return (
    <View style={{ flex: 1 }}>
      <Search />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Distributor</Text>

          <Image source={addNew} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
      <DistributorList />
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start', 
    marginLeft:15 
  },
  button: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 8,
    borderColor:'#000',
    borderWidth:1,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  buttonImage: {
    width: 20,
    height: 20,
    backgroundColor:'#fff',
    borderRadius:50,
    marginRight: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
