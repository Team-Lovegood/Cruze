import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { useTheme } from '../../../theme/themeProvider.js';

const DriverArrived = ({ backToRideList }) => {
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background,
  }
  const handleArrivedPress = () => {
    arrivedToDestination();
  }
  const [rating, setRating] = useState(0);
  const handleArrived = () => {
    backToRideList();
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.pickupName, textStyle]}>Arrived at destination</Text>
      <Text style={[styles.text, textStyle]}>How was your trip?</Text>
      <View style={[styles.starContainer, safeStyle]}>
        <View style={[styles.starRating, safeStyle]}>
          <Rating
            type="custom"
            ratingColor='#B3E5FD'
            onStartRating={(rating) => setRating(rating)}
            imageSize={30}
            startingValue={0}
            ratingBackgroundColor={textStyle.color}
            tintColor={safeStyle.backgroundColor}

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
    flex: 1.3,
    marginTop: 10,
    marginLeft: 30,
  },
  starContainer: {
    marginTop: 10,
    // marginLeft: 30,
    // marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    fontSize: 20
  },
  pickupName: {
    fontWeight: '600',
    fontSize: 25
  },
  submitBtn: {
    marginRight: 30,
    backgroundColor: '#B3E5FD',
    borderRadius: 10,
  },
  starRating: {
    flexDirection: 'row'
  }
});

export default DriverArrived;