import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Theme from './SwitchTheme.jsx';
import Language from './DropdownLanguage.jsx';

const DriverProfile = (props) => {
  // props is a user profile include First, last name
  // rating for rider, and car information
  return (
    <>
      <View style = {styles.map}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
        />
      </View>
      <View style = {styles.profile}>
        <View style = {styles.top}>
          <Text style={{fontSize: 24}}>First Last</Text>
          <Text style={{fontSize: 24}}>5.0<Text style={{color: '#B3E5FD', fontSize: 12}}>&#9733;</Text></Text>

        </View>
        <View style = {styles.car}>
          <Text style={styles.text}>Color Make Model </Text>
          <Text style={styles.plate}>License plate</Text>
        </View>
        <View style = {styles.car}>
          <Text style={styles.text}>Language</Text>
          <Language />
        </View>
        <View style = {styles.car}>
          <Text style={styles.text}>Dark mode</Text>
          <Theme />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
   map:{
     flex: 2,
     width: '100%'
   },
   profile:{
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
   },
   top: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     margin: 15,
   },
   car: {
    flexDirection: 'row',
    marginLeft: 15,
    marginBottom: 25
   },
   text: {
    fontSize: 18,
  },
   plate: {
    fontSize: 18,
    marginLeft: 35,
  }
});

export default DriverProfile;
