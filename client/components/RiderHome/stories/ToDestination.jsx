import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ToDestination = ({tripStatus}) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.driverContainer}>
        <Text style={styles.driverStatus}>{tripStatus === 'onTheWay' ? 'Driver on the way' : 'Driver has arrived at pickup'}</Text>
        <Text style={styles.bill}>$38.99</Text>
      </View>
      <View style={styles.carContainer}>
        <Text style={styles.carInfo}>Tim E Tim{"\n"}Toyota Camry</Text>
        <Text style={styles.carInfo}>AE876NG9</Text>
      </View>
    </View>
  );
};

export default ToDestination;

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.5,
    justifyContent: 'space-evenly'
  },

  driverContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  driverStatus: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10
  },

  bill: {
    padding: 10,
    fontSize: 25
  },

  carContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#B3E5FD',
    borderRadius: 15
  },

  carInfo: {
    fontSize: 20,
    padding: 10
  }
});