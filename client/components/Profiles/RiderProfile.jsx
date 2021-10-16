import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RiderProfile = (props) => {
  // Props is user profile
    // First and Last name
    // Rating
  return (
    <>
      <View style = {styles.map}><Text></Text></View>
      <View style = {styles.profile}>
        <View style = {styles.top}>
          <Text style={{fontSize: 24}}>First Last</Text>
          <Text style={{fontSize: 24}}>5.0<Text style={{color: '#B3E5FD', fontSize: 12}}>&#9733;</Text></Text>
        </View>
        <View style = {styles.optional}>
          <Text>Language</Text>
        </View>
        <View style = {styles.optional}>
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
   optional: {
    flexDirection: 'row',
    marginTop: -100,
    marginLeft: 10,
   }
});


export default RiderProfile;