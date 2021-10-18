import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { BlurView } from 'expo-blur';
import axios from 'axios';
import API from './config.js';

import Arrived from './stories/Arrived';
import SearchTrip from './stories/SearchTrip';
import FindingDriver from './stories/FindingDriver';
import ToDestination from './stories/ToDestination';

const RiderHome = () => {

  const temp = {latitude: 40.699215, longitude: -73.999039}
  const [departure, setDeparture] = useState({latitude: 40.748817, longitude: -73.985428});
  const [destination, setDestination] = useState(temp);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');


  const [tripStatus, setTripStatus] = useState('onTheWay');
  const mapRef = useRef(null);


  useEffect(() => {
    if(!departure || !destination) {
      return;
    }
    mapRef.current.fitToSuppliedMarkers(['departure', 'destination'], {
      edgePadding: { top: 35, right: 35, bottom: 35, left: 35}
    });
  }, [departure, destination]);

  useEffect(() => {
    if(!departure || !destination) {
      return;
    };

    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${departure.latitude.toString()},${departure.longitude.toString()}&destinations=${destination.latitude.toString()},${departure.longitude.toString()}&key=${API.API}`,
      headers: {}
    };
    axios(config)
    .then((res) => {
      const info = res.data.rows[0].elements[0];
      console.log(info)
      setDistance(info.distance);
      setDuration(info.duration);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [departure, destination]);


  return (
    <>
      <View style={styles.header}></View>
      <FindingDriver tripStatus={tripStatus} />
      <MapView
        blurRadius={4}
        ref={mapRef}
        style={styles.map}
        mapType="standard"
        initialRegion={{
          latitude: departure.latitude,
          longitude: departure.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {tripStatus === 'findDriver' && <BlurView style={styles.blurContainer} intensity={65} tint='light'></BlurView>}
        <MapView.Marker coordinate={departure} identifier="departure" />
        {destination && <MapView.Marker coordinate={destination} identifier="destination" />}
        {departure && destination && <MapViewDirections origin={departure} destination={destination} apikey={API.API} strokeWidth={3} strokeColor="black" mode="DRIVING" />}
      </MapView>
      {/* <SearchTrip /> */}
      <FindingDriver tripStatus={tripStatus} />
      <ToDestination tripStatus={tripStatus} distance={distance} duration={duration} />
      <Arrived tripStatus={tripStatus} />
    </>
  )
}

export default RiderHome;

const styles = StyleSheet.create({
  map: {
    flex: 5,
  },
  header: {
    height: 50,
    backgroundColor: 'white'
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#F5FCFF'
  },
  searchTrip: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize:24
  },

  car: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  spinnerTextStyle: {
    color: 'black'
  },
});