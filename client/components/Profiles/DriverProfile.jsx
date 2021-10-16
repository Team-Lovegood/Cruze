import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DriverProfile = (props) => {

  // props is a user profile include First, last name
  // rating for rider, and car information
  return (
    <>
    <Text style = {styles.map}>Map</Text>

    <Text style={styles.profile}>

      <Text style={styles.top}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.rating}>Rating<Text style={{color: '#B3E5FD'}}>&#9733;</Text></Text>
      </Text>

      <Text>{'\n'}</Text>

      <Text style= {styles.car}>
        <Text>Color Make Model</Text>
        <Text>License Plate</Text>
      </Text>



    </Text>
    </>
  )
}

const styles = StyleSheet.create({
   map:{
     flex: 2.5,
     backgroundColor:"black"
   },
   profile:{
     flex: 1,
   },

   name:{
    fontSize: 36,
    // alignSelf: 'flex-start',
   },
   rating:{
    fontSize: 36,
    //alignSelf: 'flex-end',
    // display: "flex",
   },
   car:{
    fontSize: 24,
    // alignSelf: 'flex-start'
   },
   top:{
    flexDirection: "row",
    justifyContent: 'space-evenly'
   }


});

export default DriverProfile;
