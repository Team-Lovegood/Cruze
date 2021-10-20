import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

const DriverArrived = ({ backToRideList }) => {
  const [rating, setRating] = useState(0);
  const handleArrived = () => {
    backToRideList();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pickupName}>Arrived at destination</Text>
      <Text style={styles.text}>How was your trip?</Text>
      <View style={styles.starContainer}>
        <View style={styles.starRating}>
          <Rating
            type="custom"
            ratingColor='#B3E5FD'
            onStartRating={(rating) => setRating(rating)}
            imageSize={30}
            startingValue={0}
          />
        </View>
        <View style={styles.submitBtn}>
          <Button color="black" onPress={handleArrived} title="SUBMIT"/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  starContainer: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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