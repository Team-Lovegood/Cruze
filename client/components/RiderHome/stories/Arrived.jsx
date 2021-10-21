import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import StarRating from 'react-native-star-rating';

import { Rating, AirbnbRating } from 'react-native-ratings';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faStar } from '@fortawesome/free-regular-svg-icons';

const Arrived = ({tripStatus, handleStatus}) => {

  const [rating, setRating] = useState(0);

  // useEffect(() => {
  //   if (tripStatus === "pickUp") {
  //     const test = setTimeout(() => handleStatus("arrived"), 5000);
  //     return () => clearTimeout(test);
  //   } else {
  //     return;
  //   }
  // }, [handleStatus]);

  if(tripStatus === 'arrived') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Arrived at destination</Text>
        <Text style={styles.rateText}>How was your trip?</Text>
        <View style={styles.subContainer}>
          <View style={styles.stars}>
            <Rating
              type="custom"
              ratingColor='#B3E5FD'
              onStartRating={(rating) => setRating(rating)}
              imageSize={35}
              startingValue={0}
            />
          </View>
          <View style={styles.button}>
            <Button color="black" title="SUBMIT" onPress={() => handleStatus('whereTo')}/>
          </View>
        </View>
      </View>
    )
  } else {
    return null
  }

}

export default Arrived;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  text: {
    padding: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  rateText: {
    fontSize: 20,
    paddingLeft: 15
  },
  subContainer: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  stars: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#B3E5FD',
    borderRadius: 10,
  }
});