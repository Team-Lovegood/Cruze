import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login, Signup, RiderHome, RiderProfile, DriverHome, DriverProfile} from './client/components/index.js';

export const LoginScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState({});
  return (
    <Login
    userProfile={userProfile}
    updateProfile={setUserProfile}
    signup={() => navigation.push('Signup')}
    riderHome={() => navigation.navigate('RiderHome', {userProfile: userProfile})}
    driverHome={() => navigation.navigate('DriverHome', {userProfile: userProfile})}/>
  );
};

export const SignupScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState({});
  return (
    <Signup
    userProfile={userProfile}
    updateProfile={setUserProfile}
    login={() => navigation.pop()}
    riderHome={() => navigation.navigate('RiderHome', {userProfile: userProfile})}
    driverHome={() => navigation.navigate('DriverHome', {userProfile: userProfile})}/>
    );
};

export const RiderHomeScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  return (
  <RiderHome
    userProfile={userProfile}
    logout={()=> navigation.popToTop()}
  />
  )
};
export const DriverHomeScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  return (
  <DriverHome
    userProfile={userProfile}
    logout={()=> navigation.popToTop()}
  />
  )
};

export const RiderProfileScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  return (
  <RiderProfile
  userProfile={userProfile}
  logout={()=> navigation.popToTop()}/>
  )
};
export const DriverProfileScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  return (
  <DriverProfile
  userProfile={userProfile}
  logout={()=> navigation.popToTop()}/>
  )
};
