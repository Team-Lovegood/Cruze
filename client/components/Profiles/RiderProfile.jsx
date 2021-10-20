import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Theme from './SwitchTheme.jsx';

const RiderProfile = (props) => {
  return (
  <SafeAreaView style={{flex: 1}}>
    <View style={styles.map}></View>
    <View style = {styles.profile}>
      <View style = {styles.top}>
        <Text style={{fontSize: 24}}>Tim E Tim</Text>
        <Text style={{fontSize: 24}}>4.9<Text style={{color: '#B3E5FD', fontSize: 12}}>&#9733;</Text></Text>

      </View>
      <View style = {styles.optional}>
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
     marginBottom: 25,
   },
   optional: {
    flexDirection: 'row',
    marginLeft: 15,
    marginBottom: 25
   },
   text: {
    fontSize: 18,
  },
});


export default RiderProfile;