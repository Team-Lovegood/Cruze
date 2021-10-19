import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Arrived = ({tripStatus}) => {
  if(tripStatus === 'arrived') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Arrived at destination</Text>
        <Text style={styles.rateText}>How was your trip?</Text>
        <View style={styles.subContainer}>
          <View style={styles.stars}>
            <FontAwesomeIcon size={30} icon={faStar} />
            <FontAwesomeIcon size={30} icon={faStar} />
            <FontAwesomeIcon size={30} icon={faStar} />
            <FontAwesomeIcon size={30} icon={faStar} />
            <FontAwesomeIcon size={30} icon={faStar} />
          </View>
          <View style={styles.button}>
            <Button color="black" title="SUBMIT"/>
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