import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DriverProfile = (props) => {

  // props is a user profile include First, last name
  // rating for rider, and car information
  return (
    <>
      <View style = {styles.map}><Text></Text></View>
      <View style = {styles.profile}>
        <View style = {styles.top}>
          <Text style={{fontSize: 24}}>First Last</Text>
          <Text style={{fontSize: 24}}>5.0<Text style={{color: '#B3E5FD', fontSize: 12}}>&#9733;</Text></Text>
        </View>
        <View style = {styles.car}>
          <Text style={{fontSize: 18}}>Color Make Model: </Text>
          <Text style={{fontSize: 18}}>License Plate</Text>
        </View>
        <View style = {styles.car}>
          <Text>Language</Text>
        </View>
        <View style = {styles.car}>
          <Text>Theme</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
   map:{
     flex: 2.5,
     width: '100%'
   },
   profile:{
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
   },
   top: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     margin: 10,
     marginTop: -100
   },
   car: {
    flexDirection: 'row',
    marginTop: -100,
    marginLeft: 10,
   }
});

export default DriverProfile;
