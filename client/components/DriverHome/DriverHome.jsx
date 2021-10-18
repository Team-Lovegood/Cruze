import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RiderList from './RiderList.jsx';
import Map from './Map.jsx';
import DriverPickup from './DriverPickup.jsx';

const DriverHome = () => {
  const [rider, setRider] = useState('');
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

  return (
    <>
      <Map />
      {isRiderListVisible && <RiderList toggleRiderList={toggleRiderList} toggleRiderPickup={toggleRiderPickup}/>}
      {isDriverPickupVisible && <DriverPickup name='Jordan' amount={10} distance={2} /> }
    </>
  );
};

const styles = StyleSheet.create({
  // landingContainer: {
  //   flex: 6
  // },
  mapView: {
    flex: 5
  },
  driverPick: {
    flex: 1
  }
});

export default DriverHome;