import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../../theme/themeProvider.js';

const ToDestination = ({tripStatus, distance, duration, handleStatus, profileOpen}) => {
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background,
  }
  const distanceRate = 1.5;
  const durationRate = 0.1;
  const price = Number(distanceRate*distance.value/1000 + durationRate*duration.value/60).toFixed(2);

  // useEffect(() => {
  //   if (tripStatus === "onTheWay") {
  //     const test = setTimeout(() => handleStatus("pickUp"), 5000);
  //     return () => clearTimeout(test);
  //   } else {
  //     return;
  //   }
  // }, [handleStatus]);


  if ((tripStatus === 'onTheWay' && !profileOpen) || (tripStatus === 'pickUp' && !profileOpen)) {
    return (
      <View style={styles.topContainer}>
        <View style={styles.driverContainer}>
          <Text style={styles.driverStatus}>{tripStatus === 'onTheWay' ? 'Driver on the way' : 'Heading to destination'}</Text>
          <Text style={styles.bill}>${price}</Text>
        </View>
        <View style={styles.driverContainer}>
          <Text style={styles.tripInfo}>{distance.text}</Text>
          <Text style={styles.tripInfo}>{duration.text}</Text>
        </View>
        <View style={styles.carContainer}>
          <Text style={styles.carInfo}>Tim E Tim{"\n"}Toyota Camry</Text>
          <FontAwesomeIcon style={styles.car} size={40} icon={faCar} />
          <Text style={styles.carInfo}>AE876NG9</Text>
        </View>
      </View>
    );
  } else {
    return null
  }
};

export default ToDestination;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1.5,
    justifyContent: 'space-evenly',
    marginBottom: 10
  },

  driverContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  driverStatus: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15
  },

  bill: {
    padding: 15,
    fontSize: 25
  },

  carContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B3E5FD',
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    bottom: 20
  },

  carInfo: {
    fontSize: 20,
    padding: 15
  },

  tripInfo: {
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20
  }
});