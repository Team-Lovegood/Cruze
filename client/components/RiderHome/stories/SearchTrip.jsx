import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { KeyboardAvoidingView } from 'react-native'
import API from '../config.js';
const GOOGLE_PLACES_API_KEY = 'AIzaSyCIRN4ADxtR99n6x0EZ3QSsLXiW5wLZIWU';

const SearchTrip = ({ showMap, handleMap }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Hello Timothy</Text>
      {/* <View onPress={handleMap}> */}
      <GooglePlacesAutocomplete style={styles.search}
        placeholder='From'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        query={{
          key: API.API,
          language: 'en',
        }}
      />
      <GooglePlacesAutocomplete style={styles.search}
        placeholder='To'
        enablePoweredByContainer={false}
        query={{
          key: API.API,
          language: 'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
      />
      {/* </View> */}
    </View>
  )
}

export default SearchTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeMessage: {
    fontSize: 20
  },
  search: {
    borderColor: 'black',
    paddingTop: 10
  },
});