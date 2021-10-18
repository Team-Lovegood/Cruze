import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DriverPickup = ({ name, distance, amount }) => {
  return (
    <View style={styles.container}>
      <Text>
        Picking Up: {name}
      </Text>
      <Text>
        $ {amount}
      </Text>
      <Text>
        {distance} miles
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default DriverPickup;