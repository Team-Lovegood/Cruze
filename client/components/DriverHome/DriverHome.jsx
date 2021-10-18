import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RiderList from './RiderList.jsx';
import Map from './Map.jsx';
import DriverPickup from './DriverPickup.jsx';

const DriverHome = () => {
  const [rider, setRider] = useState({});
  const [dollarAmount, setDollarAmount] = useState('');
  const [miles, setMiles] = useState('');
  const [isRiderListVisible, setIsRiderListVisible] = useState(true);
  const [isDriverPickupVisible, setIsDriverPickupVisible] = useState(false);

  const toggleRiderList = () => {
    setIsRiderListVisible(!isRiderListVisible);
  };

  const toggleRiderPickup = () => {
    setIsDriverPickupVisible(!isDriverPickupVisible);
  };

  const changeRider = (rider) => {
    setRider(rider);
  }

  return (
    <>
      <Map />
      {isRiderListVisible &&
        <RiderList
          changeRider={changeRider}
          toggleRiderList={toggleRiderList}
          toggleRiderPickup={toggleRiderPickup}
      />}
      {isDriverPickupVisible &&
        <DriverPickup
          rider={rider}
      />}
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