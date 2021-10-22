import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, LogBox } from 'react-native';
import RiderList from './RiderList.jsx';
import Map from './Map.jsx';
import DriverPickup from './DriverPickup.jsx';
import DriverArrived from './DriverArrived.jsx';
import OnTheWay from './OnTheWay.jsx';
import DriverProfile from '../Profiles/DriverProfile.jsx';
import * as Location from 'expo-location';
import io from 'socket.io-client';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../../theme/themeProvider.js';

const DriverHome = ({userProfile, logout}) => {
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background,
  }
  const [rider, setRider] = useState({});
  const [dollarAmount, setDollarAmount] = useState('');
  const [miles, setMiles] = useState('');
  const [status, setStatus] = useState('rideList');
  const [driverLocation, setDriverLocation] = useState({latitude: 70.6414929,
    longitude: -73.9927213});
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState(null);
  const [trip, setTrip] = useState({});
  const socket = io('http://18.216.63.227');
  const [profileToggle, setProfileToggle] = useState(false);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Unhandled promise rejection: Error: timeout exceeded', 'Unhandled promise rejection: Error: Network Error', 'Possible Unhandled Promise Rejection']);
  }, [])

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
    setOrigin(rider.location);
    setDestination(rider.destination);
    socket.emit('tripStatus', 'pickUp');
    setStatus('onTheWay');
  }

  const arrivedToDestination = () => {
    setDriverLocation(destination);
    setDestination(null);
    socket.emit('tripStatus', 'arrived');
    setStatus('arrived');
  }

  const backToRideList = () => {
    setStatus('backToRiderList');
  }

  const toDriverProfile = () => {
    setProfileToggle(!profileToggle);
  }

  const setDistAndDirection = (object) => {
    setDistance(object.distance.toFixed(1));
    setDuration(object.duration);
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
    <SafeAreaView style={[styles.container, safeStyle]}>
      <View style={styles.menu}>
        <Icon
          name="bars"
          size={28}
          onPress={toDriverProfile}
        >
        </Icon>
      </View>
      <Map
        destination={destination}
        origin={origin}
        driverLocation={driverLocation}
        setDistAndDirection={setDistAndDirection}
      />
      {(status === 'rideList' || status === 'backToRiderList') && !profileToggle &&
        <RiderList
          changeRider={changeRider}
          name={userProfile.firstname}
          trip={trip}
      />}
      {status === 'pickup' && !profileToggle &&
        <DriverPickup rider={rider} onTheWay={onTheWay} distance={distance} />
      }
      {status === 'onTheWay' && !profileToggle &&
        <OnTheWay rider={rider} arrivedToDestination={arrivedToDestination} distance={distance} />
      }
      {status === 'arrived' && !profileToggle &&
        <DriverArrived backToRideList={backToRideList} />
      }
      {profileToggle &&
        <View style={{flex: 3}}>
          <DriverProfile logout={logout} userProfile={userProfile}/>
        </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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
});

export default DriverHome;