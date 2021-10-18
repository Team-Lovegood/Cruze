import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login, Signup, RiderProfile, DriverHome, DriverProfile} from './client/components/index.js';

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Login signup={() => navigation.push('Signup')}/>
    </View>
  );
};
export const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Signup login={() => navigation.pop()}/>
    </View>
  );
};

export const RiderProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <RiderProfile/>
    </View>
  );
};

export const DriverHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DriverHome/>
    </View>
  );
};
export const DriverProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DriverProfile/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});