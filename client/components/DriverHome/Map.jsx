import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import config from '../../../config.js';

const Map = ({ destination }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 40.6414929,
        longitude: -73.9927213,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {destination && <MapViewDirections
        origin={{
          latitude: 40.6414929,
          longitude: -73.9927213
        }}
        destination={{
          latitude: destination.latitude,
          longitude: destination.longitude
        }}
        apikey={config.google_api} // insert your API Key here
        strokeWidth={4}
        strokeColor="#4A89F3"
      />}

      {destination && <MapView.Marker coordinate={{
        latitude: 40.6414929,
        longitude: -73.9927213,
        identifier: 'origin'
      }}
      />}

      {destination && <MapView.Marker coordinate={{
        latitude: destination.latitude,
        longitude: destination.longitude,
        identifier: 'destination'
      }}
      />}

    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Map;