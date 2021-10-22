import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal, SafeAreaView, Button, Pressable } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from '../components/PlaceRow.jsx';
import API from '../config.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: '',
    value: 'option1'
  },
  {
    id: '2',
    label: '',
    value: 'option2'
  },
  {
    id: '3',
    label: '',
    value: 'option3'
  }
]

const SearchTrip = ({ tripStatus, handleStatus, handleTrip, name }) => {

  let departure = {}
  let destination = {}
  const [radioButtons, setRadioButtons] = useState(radioButtonsData)

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  }

  if(tripStatus === 'searchTrip') {
    return (
      <Modal>
        <View style={styles.container}>
          <Text style={styles.welcomeMessage}>Hello {name}</Text>
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
        <View style={styles.passengersContainer}>
          <MaterialCommunityIcons name='car-convertible' size={35} color={'black'} />
          <Ionicons name='ios-car' size={30} color={'black'} />
          <MaterialCommunityIcons name='car-estate' size={35} color={'black'} />
        </View>
        <RadioGroup
          containerStyle={styles.radioGroup}
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout='row'
        />
        <View style={styles.capacityGroup}>
          <Text style={styles.luxury}>1</Text>
          <Text style={styles.sedan}>4</Text>
          <Text style={styles.suv}>5+</Text>
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
  },
  passengersContainer: {
    flexDirection: 'row',
    position: 'relative',
    bottom: 125,
    height: 175,
    marginRight: 40,
    marginLeft: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#B3E5FD',
  },
  radioGroup: {
    position: 'relative',
    bottom: 190,
    marginRight: 40,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  capacityGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
    bottom: 190,
  },
  luxury: {
    position: 'relative',
    left: 14
  },
  sedan: {
    position: 'relative',
    left: 6
  },
  suv: {
    position: 'relative',
    right: 4
  }
});