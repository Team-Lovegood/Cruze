import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { BlurView } from 'expo-blur';
import axios from 'axios';
import io from 'socket.io-client';
import API from './config.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RiderProfile from '../Profiles/RiderProfile.jsx';
import WhereTo from './stories/WhereTo';
import Arrived from './stories/Arrived';
import SearchTrip from './stories/SearchTrip';
import FindingDriver from './stories/FindingDriver';
import ToDestination from './stories/ToDestination';

const RiderHome = ({ communication, userProfile }) => {

  const defaultAddress = {name:'Empire State Building',latitude: 40.748817, longitude: -73.985428};
  const [departure, setDeparture] = useState(defaultAddress);
  const [destination, setDestination] = useState(departure);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [socket, setSocket] = useState('')


  const [tripStatus, setTripStatus] = useState('whereTo');
  const [profileOpen, setProfileOpen] = useState(false);
  const mapRef = useRef(null);

  const handleStatus = (status) => {
    if(status === 'whereTo') {
      setDeparture(defaultAddress);
      setDestination(defaultAddress);
      setTripStatus(status);
    } else {
      setTripStatus(status);
    }
  };

  const handleTrip = (departure, destination) => {

    if(Object.values(departure).length !== 0 && Object.values(destination).length !== 0) {
      setDeparture(departure);
      setDestination(destination);
      socket.emit('new trip', {
        name: '22-year-old Sebas',
        departure: departure,
        destination: destination
      });
      socket.emit('tripStatus', tripStatus);
      setTripStatus('findDriver');
    } else {
      setTripStatus('whereTo');
    }
  };

  useEffect(() => {
      setSocket(io('http://18.216.63.227'));
  },[]);

  useEffect(() => {
    if (socket) {
      socket.on("tripStatus", (status) => {
        if (status !== "searchTrip") {
          console.log(status);
          setTripStatus(status);
        }
      });
    }
  });

  useEffect(() => {
    if (!departure || !destination) {
      return;
    }
    mapRef.current.fitToSuppliedMarkers(["departure", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [departure, destination, tripStatus]);

  useEffect(() => {
    if (!departure || !destination) {
      return;
    }

    var config = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${departure.latitude.toString()},${departure.longitude.toString()}&destinations=${destination.latitude.toString()},${departure.longitude.toString()}&key=${
        API.API
      }`,
      headers: {},
    };
    axios(config)
      .then((res) => {
        const info = res.data.rows[0].elements[0];
        setDistance(info.distance);
        setDuration(info.duration);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [departure, destination]);

  return (
    <SafeAreaView style={styles.container}>
      {tripStatus !== 'findDriver' && <View style={styles.menu}>
        <FontAwesome name='bars' size={30} color={'black'} onPress={() => {
          setProfileOpen(!profileOpen);
        }} />
      </View>}
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
        <View style={styles.markerContainer}>
          <MapView.Marker coordinate={departure} identifier="departure">
            <Image source={departure !== destination ? require('../../../assets/rider.png') : null} style={{ width: 30, height: 30}} resizeMode='center' resizeMethod='resize'  />
          </MapView.Marker>
          {destination && <MapView.Marker coordinate={destination} identifier="destination" />}
        </View>
      </MapView>
      {tripStatus === 'findDriver' && <BlurView style={StyleSheet.absoluteFillObject} intensity={60} tint='light'/>}
      <RiderProfile profileOpen={profileOpen} />
      <WhereTo tripStatus={tripStatus} handleStatus={handleStatus} profileOpen={profileOpen}/>
      <SearchTrip tripStatus={tripStatus} handleStatus={handleStatus} handleTrip={handleTrip}/>
      <FindingDriver tripStatus={tripStatus} handleStatus={handleStatus} />
      <ToDestination tripStatus={tripStatus} distance={distance} duration={duration} handleStatus={handleStatus} profileOpen={profileOpen}/>
      <Arrived tripStatus={tripStatus} handleStatus={handleStatus} profileOpen={profileOpen}/>
    </SafeAreaView>
  );
};

export default RiderHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 5,
  },
  markerContainer: {
    position: "absolute",
    top: 100,
    left: 50,
  },
  menu: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 1
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
  },
  searchTrip: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 24,
  },

  car: {
    marginLeft: "auto",
    marginRight: "auto",
  },

  spinnerTextStyle: {
    color: "black",
  },
});
