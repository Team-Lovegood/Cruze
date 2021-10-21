import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login, Signup, RiderHome, RiderProfile, DriverHome, DriverProfile} from './client/components/index.js';

export const LoginScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState({});

  const updateProfile = (obj) => {
    setUserProfile(obj);
  }
  return (
    <Login
    userProfile={userProfile}
    updateProfile={updateProfile}
    signup={() => navigation.push('Signup')}
    riderHome={() => navigation.navigate('RiderHome', {userProfile: userProfile})}
    driverHome={() => navigation.navigate('DriverHome', {userProfile: userProfile})}/>
  );
};

export const SignupScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState({});
  const updateProfile = (obj) => {
    setUserProfile(obj);
  }
  return (
    <Signup
    userProfile={userProfile}
    updateProfile={updateProfile}
    login={() => navigation.pop()}
    riderHome={() => navigation.navigate('RiderHome')}
    driverHome={() => navigation.navigate('DriverHome')}/>
    );
};

export const RiderHomeScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  return (
  <RiderHome
    userProfile={userProfile}
  />
  )
};
export const DriverHomeScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  return (
  <DriverHome
    userProfile={userProfile}
  />
  )
};

export const RiderProfileScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  return (
  <RiderProfile userProfile={userProfile}/>
  )
};
export const DriverProfileScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  return (
  <DriverProfile userProfile={userProfile}/>
  )
};
