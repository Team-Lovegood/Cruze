import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RiderList from './RiderList.jsx';
import Map from './Map.jsx';
import DriverPickup from './DriverPickup.jsx';
import DriverArrived from './DriverArrived.jsx';
import OnTheWay from './OnTheWay.jsx';
import DriverProfile from '../Profiles/DriverProfile.jsx';
import * as Location from 'expo-location';
import io from 'socket.io-client';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

const DriverHome = () => {
  const [rider, setRider] = useState({});
  const [dollarAmount, setDollarAmount] = useState('');
  const [miles, setMiles] = useState('');
  const [status, setStatus] = useState('rideList');
  const [driverLocation, setDriverLocation] = useState({latitude: 70.6414929,
    longitude: -73.9927213});
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState(null);
  const [trip, setTrip] = useState({});
  const socket = io('http://127.0.0.1:3000');
  const [profileToggle, setProfileToggle] = useState(false);

  useEffect(() => {
    socket.on('new trip', trip => {
      setTrip(trip);
    });
    socket.on('tripStatus', tripStatus => {

    });
  }, []);

  const changeRider = async (rider) => {
    setRider(rider);
    // getCurrentLocation().then((loc) => {
    //   setDriverLocation({latitude: loc.latitude, longitude: loc.longitude});
    // });
    setOrigin(driverLocation);
    setDestination(rider.location);
    socket.emit('tripStatus', 'onTheWay');
    setStatus('pickup');
  }

  const onTheWay = () => {
    setOrigin(driverLocation);
    setDestination(rider.destination);
    socket.emit('tripStatus', 'pickUp');
    setStatus('onTheWay');
  }

  const arrivedToDestination = () => {
    setDestination(null);
    socket.emit('tripStatus', 'arrived');
    setStatus('arrived');
  }

  const backToRideList = () => {
    setStatus('backToRiderList');
  }

  const myButton = (
    <Icon.Button
      name="bars"
      backgroundColor="black"
      onPress={toDriverProfile}
    >
    </Icon.Button>
  );

  const toDriverProfile = () => {
    setProfileToggle(!profileToggle);
    setStatus('driverProfile');
  }

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let {coords} = await Location.getCurrentPositionAsync({});
      return coords;
  }
  useEffect(() => {
    (async () => {
      // let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
      //   setErrorMsg('Permission to access location was denied');
      //   return;
      // }
      // let {coords} = await Location.getCurrentPositionAsync({});
      const coords = await getCurrentLocation()
      setDriverLocation({latitude: coords.latitude, longitude: coords.longitude});
    })();
  }, [setDriverLocation]);


  return (
    <>
      <View style={styles.menu}>
        <Icon.Button
          name="bars"
          backgroundColor="black"
          onPress={toDriverProfile}
        >
        </Icon.Button>
      </View>
      <Map destination={destination} origin={origin} driverLocation={driverLocation}/>
      {(status === 'rideList' || status === 'backToRiderList') &&
        <RiderList
          changeRider={changeRider}
          trip={trip}
      />}
      {status === 'pickup' &&
        <DriverPickup rider={rider} onTheWay={onTheWay}/>
      }
      {status === 'onTheWay' &&
        <OnTheWay rider={rider} arrivedToDestination={arrivedToDestination} />
      }
      {status === 'arrived' &&
        <DriverArrived backToRideList={backToRideList} />
      }
      {status === 'driverProfile' && profileToggle &&
        <View style={styles.driverProfile}>
          <DriverProfile />
        </View>
      }
      {status === 'driverProfile' && !profileToggle &&
        <RiderList
          changeRider={changeRider}
          trip={trip}
      />
      }
    </>
  );
};

const styles = StyleSheet.create({
  mapView: {
    flex: 5
  },
  driverPick: {
    flex: 1
  },
  menu: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 1
  },
  driverProfile: {
    flex: 2
  }
});

export default DriverHome;