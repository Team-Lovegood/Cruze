import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { KeyboardAvoidingView } from 'react-native'
import API from '../config.js';


const SearchTrip = ({ showMap, handleMap }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Hello Rider</Text>
      <View>
      <GooglePlacesAutocomplete
        placeholder='From'
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        query={{
          key: API.API,
          language: 'en',
        }}
      />
      <GooglePlacesAutocomplete
        placeholder='To'
        enablePoweredByContainer={false}
        query={{
          key: API.API,
          language: 'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
      />
      </View>
    </View>
  )
}

export default SearchTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'center',
  },
  welcomeMessage: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
  },
  search: {
    borderColor: 'black',
  },
});
