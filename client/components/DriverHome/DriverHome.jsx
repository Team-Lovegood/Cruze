import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RiderList from './RiderList.jsx';
import DriverMap from './DriverMap.jsx';
import Map from './Map.jsx';

const DriverHome = () => {
  return (
    <>
      <View style={styles.landingContainer}>
        {/* <DriverMap /> */}
        <Map />
      </View>
      <View style={styles.landingContainer}>
        <Text style={styles.title}>
          Hello, Tim
        </Text>
          <RiderList />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 25,
    borderColor: "#20232a",
    color: "#20232a",
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold"
  }
})

export default DriverHome;