import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { BlurView } from 'expo-blur';
import axios from 'axios';
import API from './config.js';

import WhereTo from './stories/WhereTo';
import Arrived from './stories/Arrived';
import SearchTrip from './stories/SearchTrip';
import FindingDriver from './stories/FindingDriver';
import ToDestination from './stories/ToDestination';

const RiderHome = () => {

  const [departure, setDeparture] = useState({latitude: 40.748817, longitude: -73.985428});
  const [destination, setDestination] = useState(departure);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');


  const [tripStatus, setTripStatus] = useState('whereTo');
  const mapRef = useRef(null);

  const handleStatus = (status) => {
    setTripStatus(status);
  }

  const handleTrip = (departure, destination) => {

    if(Object.values(departure).length !== 0 && Object.values(destination).length !== 0) {
      setDeparture(departure);
      setDestination(destination);
      setTripStatus('findDriver');
    } else {
      setTripStatus('whereTo');
    }
  }

  useEffect(() => {
    if(!departure || !destination) {
      return;
    }
    mapRef.current.fitToSuppliedMarkers(['departure', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50}
    });
  }, [departure, destination, tripStatus]);

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
      setDistance(info.distance);
      setDuration(info.duration);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [departure, destination]);


  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        scrollEnabled={true}
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
        {departure && destination && <MapViewDirections origin={departure} destination={destination} apikey={API.API} strokeWidth={2} strokeColor="black" mode="DRIVING" />}
        {/* <BlurView style={styles.blurContainer} intensity={tripStatus === 'findDriver' ? 60 : 0} tint='light'/> */}
        <View style={styles.markerContainer}>
          <MapView.Marker coordinate={departure} identifier="departure" />
          {destination && <MapView.Marker coordinate={destination} identifier="destination" />}
          {/* {tripStatus === 'findDriver' && <BlurView style={styles.blurContainer} intensity={60} tint='light'/>} */}
        </View>
      </MapView>
      {tripStatus === 'findDriver' && <BlurView style={StyleSheet.absoluteFillObject} intensity={60} tint='light'/>}
      <WhereTo tripStatus={tripStatus} handleStatus={handleStatus} />
      <SearchTrip tripStatus={tripStatus} handleStatus={handleStatus} handleTrip={handleTrip}/>
      <FindingDriver tripStatus={tripStatus} handleStatus={handleStatus} />
      <ToDestination tripStatus={tripStatus} distance={distance} duration={duration} handleStatus={handleStatus} />
      <Arrived tripStatus={tripStatus} handleStatus={handleStatus} />
    </SafeAreaView>
  )
}

export default RiderHome;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 5,
  },
  markerContainer: {
    position: 'absolute',
    top: 100,
    left: 50
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

  spinnerTextStyle: {
    color: 'black'
  },
});