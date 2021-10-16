import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './Map.jsx';

const DriverMap = () => {
  return (
    <View>
      <View style={styles.topHalf}>
        <Map />
      </View>

      <View style={styles.botHalf}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHalf: {

  },
  botHalf: {

  }
});

export default DriverMap;