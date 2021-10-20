import React, { useState, useEffect } from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DriverArrived = ({ backToHomePage }) => {

  const handleSubmit = () => {
    backToHomePage();
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.pickupName}>Arrived at destination</Text>
        <Text style={styles.text}>How was your trip?</Text>
        <View style={styles.btnContainer}>
          <View style={styles.starRating}>
            <FontAwesomeIcon size={30} icon={faStar} />
            <FontAwesomeIcon size={30} icon={faStar} />
            <FontAwesomeIcon size={30} icon={faStar} />
            <FontAwesomeIcon size={30} icon={faStar} />
            <FontAwesomeIcon size={30} icon={faStar} />
          </View>
          <Button
            color="black"
            title="Submit"
          />
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
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20
  }
});

export default DriverArrived;