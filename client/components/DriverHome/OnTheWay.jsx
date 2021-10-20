import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const OnTheWay = ({ rider, arrivedToDestination }) => {

  const handleArrivedPress = () => {
    arrivedToDestination();
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.pickupName}>
          On the way
        </Text>
        <Text style={styles.name}>
          {rider.distance} mi
        </Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>
          {rider.address}
        </Text>
        <View>
          <TouchableOpacity
            onPress={handleArrivedPress}
          >
            <Image
              source={require('../../../assets/arrive.png')}
              style={{ width: 45, height: 45, marginLeft: 3 }}
            />
          <Text style={{fontWeight: '600', marginTop: -5}}>Arrived</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5
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
    marginTop: 6,
    fontWeight: '600',
    fontSize: 22,
  },
  address: {
    width: '70%',
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: "#B3E5FD",
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    borderRadius: 10,
    overflow: 'hidden'
  },
  // hereBtn: {
  //   width: 28,
  //   height: 28,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 5,
  //   padding: 10,
  //   borderRadius: 100,
  //   backgroundColor: '#C4C4C4',
  // },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20,
  }
});

export default OnTheWay;