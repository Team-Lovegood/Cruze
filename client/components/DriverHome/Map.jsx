import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import config from '../../../config.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
const Map = ({ destination, driverLocation, origin }) => {
  let mapView = null;
  const { width, height } = Dimensions.get('window');
  return (
    <MapView
      mapType="standard"
      ref={c => mapView = c}
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
      {!destination && <Marker coordinate={{
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        identifier: 'origin',
      }}>
        <Image source={require('../../../assets/car-xxl.png')} style={{ width: 30, height: 30 }} />
      </Marker>}

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
        onReady={result => {
          mapView.fitToCoordinates(result.coordinates, {
            edgePadding: {
              right: (width / 20),
              bottom: (height / 20),
              left: (width / 20),
              top: (height / 20),
            }
          });
        }}
      />}

      {destination &&
        <Marker coordinate={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          identifier: 'departure'
        }}>
          <Image source={require('../../../assets/car-xxl.png')} style={{ width: 30, height: 30 }} />
        </Marker>
      }

      {destination &&
        <Marker coordinate={{
          latitude: destination.latitude,
          longitude: destination.longitude,
          identifier: 'destination'
        }}>
          <Image source={require('../../../assets/rider.png')} style={{ width: 30, height: 30 }} />
        </Marker>
      }
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