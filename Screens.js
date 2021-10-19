import React, { useEffect } from 'react';
import { auth } from './firebase';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import {Login, Signup, RiderProfile, DriverHome, DriverProfile} from './client/components/index.js';

export const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Login
      signup={() => navigation.push('Signup')}
      riderHome={() => navigation.push('RiderProfile')}
      driverHome={() => navigation.push('DriverProfile')}
      />
    </KeyboardAvoidingView>
  );
};
export const SignupScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Signup
      login={() => navigation.pop()}
      riderHome={() => navigation.push('RiderProfile')}
      driverHome={() => navigation.push('DriverProfile')}
      />
    </KeyboardAvoidingView>
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