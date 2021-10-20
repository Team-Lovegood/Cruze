import React from 'react';
import {Login, Signup, RiderHome, RiderProfile, DriverHome, DriverProfile} from './client/components/index.js';

export const LoginScreen = ({ navigation }) => {
  return (
    <Login
    signup={() => navigation.push('Signup')}
    riderHome={() => navigation.push('RiderHome')}
    driverHome={() => navigation.push('DriverHome')}
    />
  );
};
export const SignupScreen = ({ navigation }) => {
  return (
    <Signup
    login={() => navigation.pop()}
    car={() => navigation.push('Car')}
    riderHome={() => navigation.push('RiderHome')}
    driverHome={() => navigation.push('DriverHome')}
    />
  );
};


export const RiderHomeScreen = ({ navigation }) => { return (<RiderHome/>) };
export const DriverHomeScreen = ({ navigation }) => { return (<DriverHome/>) };

export const RiderProfileScreen = ({ navigation }) => { return (<RiderProfile/>) };
export const DriverProfileScreen = ({ navigation }) => { return (<DriverProfile/>) };
