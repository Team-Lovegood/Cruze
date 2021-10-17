import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './client/components/Login/Login.jsx';
import Signup from './client/components/Login/Signup.jsx';
import RiderProfile from './client/components/Profiles/RiderProfile.jsx';
import DriverProfile from './client/components/Profiles/DriverProfile.jsx';

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