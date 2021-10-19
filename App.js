import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen, RiderProfileScreen, DriverHomeScreen, DriverProfileScreen } from './Screens.js';
//import riderhome
//import driverhome

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Team Lovegood</Text>
        <StatusBar style="auto" />
      </View>

      {/* <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
          <AuthStack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}}/>
          <AuthStack.Screen name='DriverProfile' component={DriverProfileScreen} options={{headerShown: false}}/>
          <AuthStack.Screen name='RiderProfile' component={RiderProfileScreen} options={{headerShown: false}}/>
        </AuthStack.Navigator>
      </NavigationContainer> */}

      {/* <View style={styles.container}>
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
      </View> */}
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