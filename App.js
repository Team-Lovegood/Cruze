import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, SignupScreen } from './Screens.js';
import RiderProfile from './client/components/Profiles/RiderProfile.jsx';
import DriverProfile from './client/components/Profiles/DriverProfile.jsx';
//import riderhome
//import driverhome

const AuthStack = createStackNavigator();

export default function App() {
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen}/>
      <AuthStack.Screen name='Signup' component={SignupScreen}/>
    </AuthStack.Navigator>
  </NavigationContainer>
  // return (
  //   <>
  //   <View style={styles.container}>
  //     <Text>Team Lovegood</Text>
  //     <LandingPage/>
  //     <RiderProfile />
  //     <DriverProfile />
  //     <StatusBar style="auto" />
  //   </View>

  //   <View style={styles.container}>
  //     <Text>Profiles</Text>
  //     <StatusBar style="auto" />
  //   </View>

  //   <View style={styles.container}>
  //     <Text>Rider Home</Text>
  //     <StatusBar style="auto" />
  //   </View>

  //   <View style={styles.container}>
  //     <Text>Driver Home</Text>
  //     <StatusBar style="auto" />
  //   </View>
  //   </>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});