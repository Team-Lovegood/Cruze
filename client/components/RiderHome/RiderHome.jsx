import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import API from './config.js';

import SearchTrip from './stories/SearchTrip';
import FindingDriver from './stories/FindingDriver';
import ToDestination from './stories/ToDestination';

const RiderHome = () => {

  const [departure, setDeparture] = useState({latitude: 40.748817, longitude: -73.985428});
  const [destination, setDestination] = useState(null)
  const temp = {latitude: 40.699215, longitude: -73.999039}

  const [tripStatus, setTripStatus] = useState('onTheWay');
  const mapRef = useRef(null);

  useEffect(() => {
    if(!departure || !destination) {
      return;
    }
    mapRef.current.fitToSuppliedMarkers(['departure', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50}
    });
  }, [departure, destination]);


  return (
    <>
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
      {/* <SearchTrip showMap={showMap} handleMap={handleMap} /> */}
      <ToDestination tripStatus={tripStatus} />
    </>
  )
}

export default RiderHome;

const styles = StyleSheet.create({
  map: {
    flex: 2.5
  },
});