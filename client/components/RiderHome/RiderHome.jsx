import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import API from './config.js';

// import { BlurView } from "@react-native-community/blur";

import Arrived from './stories/Arrived';
import SearchTrip from './stories/SearchTrip';
import FindingDriver from './stories/FindingDriver';
import ToDestination from './stories/ToDestination';

const RiderHome = () => {

  const temp = {latitude: 40.699215, longitude: -73.999039}
  const [departure, setDeparture] = useState({latitude: 40.748817, longitude: -73.985428});
  const [destination, setDestination] = useState(temp);


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


  return (
    <>
      <View style={styles.header}></View>
      {/* <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        /> */}
      <MapView
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
        <MapView.Marker coordinate={departure} identifier="departure" />
        {destination && <MapView.Marker coordinate={destination} identifier="destination" />}
        {departure && destination && <MapViewDirections origin={departure} destination={destination} apikey={API.API} strokeWidth={3} strokeColor="black" mode="DRIVING" />}
      </MapView>
      <SearchTrip />
      {/* <FindingDriver /> */}
      {/* <ToDestination tripStatus={tripStatus} /> */}
      {/* <Arrived /> */}
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
  }
});