import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import SearchTrip from './stories/SearchTrip';
import FindingDriver from './stories/FindingDriver';

const RiderHome = () => {

  const [showMap, setShowMap] = useState(true)
  const handleMap = () => {
    setShowMap(false);
  }

  return (
    <>
      {showMap && <MapView
        style={styles.map}
        mapType="standard"
        initialRegion={{
          latitude: 40.7127,
          longitude: -74.0134,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      />}
      <SearchTrip showMap={showMap} handleMap={handleMap} />
    </>
  )
}

export default RiderHome;

const styles = StyleSheet.create({
  map: {
    flex: 2.5
  }
});