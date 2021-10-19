import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DriverArrived = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.pickupName}>Arrived at destination</Text>
        <Text style={styles.text}>How was your trip?</Text>
        <View style={styles.starRating}>
          <FontAwesomeIcon size={30} icon={faStar} />
          <FontAwesomeIcon size={30} icon={faStar} />
          <FontAwesomeIcon size={30} icon={faStar} />
          <FontAwesomeIcon size={30} icon={faStar} />
          <FontAwesomeIcon size={30} icon={faStar} />
        </View>
        <View style={styles.submitBtn}>
          <Button color="black" title="SUBMIT"/>
        </View>
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
  submitBtn: {
    backgroundColor: '#B3E5FD',
    borderRadius: 10,
  },
  starRating: {
    flexDirection: 'row'
  }
});

export default DriverArrived;