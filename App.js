import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import login
//import profiles
import RiderHome from './client/components/RiderHome/RiderHome.jsx';
//import driverhome

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
        <Text>Login</Text>
        <StatusBar style="auto" />
      </View> */}

      {/* <View style={styles.container}>
        <Text>Profiles</Text>
        <StatusBar style="auto" />
      </View> */}

      <View style={styles.container}>
        <RiderHome />
        <StatusBar style="auto" />
      </View>

      {/* <View style={styles.container}>
        <Text>Driver Home</Text>
        <StatusBar style="auto" />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});