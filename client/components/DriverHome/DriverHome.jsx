import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RiderList from './RiderList.jsx';
import Map from './Map.jsx';
import DriverPickup from './DriverPickup.jsx';
import OnTheWay from './OnTheWay.jsx';
import * as Location from 'expo-location';

const DriverHome = () => {
  const [rider, setRider] = useState({});
  const [dollarAmount, setDollarAmount] = useState('');
  const [miles, setMiles] = useState('');
  const [isRiderListVisible, setIsRiderListVisible] = useState(true);
  const [status, setStatus] = useState('rideList');
  const [driverLocation, setDriverLocation] = useState({});

  const changeRider = (rider) => {
    setRider(rider);
    setStatus('pickup')
  }

  const onTheWay = () => {
    setStatus('onTheWay');
  }

  const ArrivedToDestination = () => {
    setStatus('arrived');
  }
  Location.requestForegroundPermissionsAsync().then(() => {
    Location.getCurrentPositionAsync({}).then(res => {
      console.log(res)
    })

  })

  return (
    <>
      <Map destination={rider.location}/>
      {status === 'rideList' &&
        <RiderList
          changeRider={changeRider}
      />}
      {status === 'pickup' &&
        <DriverPickup rider={rider} onTheWay={onTheWay}/>
      }
      {status === 'onTheWay' &&
        <OnTheWay rider={rider} ArrivedToDestination={ArrivedToDestination} />
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
  }
});

export default DriverHome;