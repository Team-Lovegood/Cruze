import React from 'react';
import {Login, Signup, RiderProfile, DriverProfile} from './client/components/index.js';

export const LoginScreen = ({ navigation }) => {
  return (
    <Login
    signup={() => navigation.push('Signup')}
    riderHome={() => navigation.push('RiderProfile')}
    driverHome={() => navigation.push('DriverProfile')}
    />
  );
};
export const SignupScreen = ({ navigation }) => {
  return (
    <Signup
    login={() => navigation.pop()}
    riderHome={() => navigation.push('RiderProfile')}
    driverHome={() => navigation.push('DriverProfile')}
    />
  );
};
export const RiderProfileScreen = ({ navigation }) => { return (<RiderProfile/>) };
export const DriverProfileScreen = ({ navigation }) => { return (<DriverProfile/>) };
