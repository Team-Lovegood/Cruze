import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Theme from './SwitchTheme.jsx';

const DriverProfile = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.map}></View>
      <View style = {styles.profile}>
        <View style = {styles.top}>
          <Text style={{fontSize: 24}}>Jake E Jake</Text>
          <Text style={{fontSize: 24}}>4.8<Text style={{color: '#B3E5FD', fontSize: 12}}>&#9733;</Text></Text>

        </View>
        <View style={styles.car}>
          <Text style={styles.text}>Green Kia Soul</Text>
          <Text style={styles.plate}>License Plate: Intern101</Text>
        </View>
        <View style = {styles.car}>
          <Text style={styles.text}>Dark mode</Text>
          <Theme />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 3,
    backgroundColor: '#B3E5FD'
  },
  profile:{
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  car: {
    flexDirection: 'row',
    marginLeft: 15,
    marginBottom: 25,
  },
  text: {
    fontSize: 18,
  },
  plate: {
    fontSize: 18,
    marginRight: -50,
  }
});

export default DriverProfile;
