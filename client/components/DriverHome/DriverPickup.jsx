import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DriverPickup = ({ rider }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.pickupName}>
          Picking Up: {rider.name}
        </Text>
        <Text style={styles.name}>
          $ {rider.amount}
        </Text>
        <Text style={styles.name}>
          {rider.distance} mi
        </Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>
          {rider.address}
        </Text>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.hereBtn}>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  pickupName: {
    fontWeight: '600',
    fontSize: 25
  },
  name: {
    fontWeight: '300',
    fontSize: 18
  },
  address: {
    width: '80%',
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: "#B3E5FD",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 10,
    overflow: 'hidden'
  },
  hereBtn: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20,
  }
});

export default DriverPickup;