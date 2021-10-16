import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RiderProfile = (props) => {
  // Props is user profile
    // First and Last name
    // Rating
  return (
    <>
      <Text style={styles.map}>Map</Text>

      <Text style={styles.profile}>
        <Text style={styles.top}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.rating}>Rating <Text style={{color: '#B3E5FD'}}>&#9733;</Text></Text>
        </Text>
      </Text>
    </>
  )
}


const styles = StyleSheet.create({
  map: {
    flex: 2.5,
    backgroundColor: 'black'
  },
  profile: {
    flex: 1
  },
  name: {
    fontSize: 36,
    alignSelf: 'flex-start'
  },
  rating: {
    fontSize: 36,
    alignSelf: 'flex-end'
  },
  top :{
    justifyContent: 'space-between'
  }
});



export default RiderProfile;