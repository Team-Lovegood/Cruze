import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal, SafeAreaView, Button, Pressable } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from '../components/PlaceRow.jsx';
import API from '../config.js';


const SearchTrip = ({ tripStatus, handleStatus, handleTrip }) => {

  let departure = {}
  let destination = {}

  if(tripStatus === 'searchTrip') {
    return (
      <Modal>
        <View style={styles.container}>
          <Text style={styles.welcomeMessage}>Hello Rider</Text>
          <GooglePlacesAutocomplete
            suppressDefaultStyles
            styles={{
              container: {
                position: 'relative',
                top: 10,
                left: 15,
                marginRight: 25
              },
              textInput: {
                fontSize: 15
              },
              listView: {
                position: 'absolute',
                top: 90
              },
              separator: {
                height: 1,
                backgroundColor: '#eaeaea'
              }
            }}
            placeholder='From'
            onPress={(data, details = null) => {
              console.log(details.name);
              departure = {
                name: details.name,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              }
            }}
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: API.API,
              language: 'en',
            }}
            renderRow={(data: GooglePlaceData) => {
              return <PlaceRow data={data} />
            }}
          />
          <GooglePlacesAutocomplete
            suppressDefaultStyles
            styles={{
              container: {
                position: 'relative',
                top: 39,
                left: 15,
                marginRight: 25
              },
              textInput: {
                fontSize: 15
              },
              listView: {
                position: 'absolute',
                top: 43
              },
              separator: {
                height: 1,
                backgroundColor: '#eaeaea'
              }
            }}
            placeholder='To'
            onPress={(data, details = null) => {
              // console.log(data, details);
              destination = {
                name: details.name,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              }
            }}
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: API.API,
              language: 'en',
            }}
            renderRow={(data: GooglePlaceData) => {
              return <PlaceRow data={data} />
            }}
          />
        </View>
        <View style={styles.button} >
          <Button color="black" title="SUBMIT" onPress={() => handleTrip(departure, destination)} />
        </View>
      </Modal>
    )
  } else {
    return null
  }
}

export default SearchTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  welcomeMessage: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize: 30,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  button: {
    position: 'relative',
    bottom: 100,
    height: 50,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3E5FD'
  }
});