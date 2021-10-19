import React, {useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import config from '../../../config.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const Map = ({ destination, driverLocation }) => {
  console.log('this is driver location', driverLocation)
  const mapRef = useRef(null);

  useEffect(() => {
    // if (!driverLocation || !destination) {
    //   return;
    // }
    console.log('changing')
    mapRef.current.fitToSuppliedMarkers(['departure', 'destination'], {
      edgePadding: { top: 35, right: 35, bottom: 35, left: 35}
    });
  }, [driverLocation, destination]);

  return (
    <MapView
      mapType="standard"
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      region={{
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker coordinate={{
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        identifier: 'origin',
      }}
      // image={{uri: '../../assets/car-xxl.png'}}
      />
      {destination && <MapViewDirections
        origin={{
          latitude: driverLocation.latitude,
          longitude: driverLocation.longitude
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
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        identifier: 'departure'
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