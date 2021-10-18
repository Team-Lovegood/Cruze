import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FindingDriver = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default FindingDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});