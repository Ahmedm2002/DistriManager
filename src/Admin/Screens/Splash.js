import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DistriManager</Text>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',  
    alignItems: 'center',      
  },
  logo: {
    fontSize: 40,               
    fontWeight: 'bold',         
    color: 'white',
    fontFamily:'monospace'
  },
});
