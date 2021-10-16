import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import login
//import profiles
//import riderhome
//import driverhome

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Login</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.container}>
      <Text>Profiles</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.container}>
      <Text>Rider Home</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.container}>
      <Text>Driver Home</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});