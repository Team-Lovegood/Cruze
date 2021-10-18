import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import LandingPage from './client/components/Login/LandingPage.jsx';
import RiderProfile from './client/components/Profiles/RiderProfile.jsx';
import DriverProfile from './client/components/Profiles/DriverProfile.jsx';
import DriverHome from './client/components/DriverHome/DriverHome.jsx';
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen, RiderProfileScreen, DriverHomeScreen, DriverProfileScreen } from './Screens.js';
>>>>>>> 5d34c3fa97d32cd254e8825d3a27a00946444ea0
//import riderhome
//import driverhome

const AuthStack = createStackNavigator();
const DriverStack = createStackNavigator();

export default function App() {
  return (
    <>
<<<<<<< HEAD


    {/* <View style={styles.container}>
      <Text>Profiles</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.container}>
      <Text>Rider Home</Text>
      <StatusBar style="auto" />
  </View>*/}


    <View style={styles.container}>
      <DriverHome />
      <Text>Driver Home</Text>
      <StatusBar style="auto" />
    </View>
=======
      <View style={styles.container}>
        <Text>Team Lovegood</Text>
        <StatusBar style="auto" />
      </View>

      {/* <DriverProfileScreen/> */}
      {/* <RiderProfileScreen/> */}

      {/* <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
          <AuthStack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}}/>
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
>>>>>>> 5d34c3fa97d32cd254e8825d3a27a00946444ea0
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