import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider } from 'react-native-appearance';
import { LoginScreen, SignupScreen, RiderHomeScreen, RiderProfileScreen, DriverHomeScreen, DriverProfileScreen } from './Screens.js';
import { ThemeProvider } from './theme/themeProvider.js';
import RiderHome from './client/components/RiderHome/RiderHome.jsx';
import DriverHome from './client/components/DriverHome/DriverHome.jsx';
import { LanguageWrapper } from "./client/languages/index";

const AuthStack = createStackNavigator();

export default function App() {

  return (
    <>
     <LanguageWrapper>
      {/* <View style={styles.container}>
        <Text>Team Lovegood</Text>
        <StatusBar style="auto" />
      </View> */}

      <AppearanceProvider>
      <ThemeProvider>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
          <AuthStack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}}/>
          <AuthStack.Screen name='RiderHome' component={RiderProfileScreen} options={{headerShown: false}}/>
          <AuthStack.Screen name='DriverHome' component={DriverProfileScreen} options={{headerShown: false}}/>
        </AuthStack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
      </AppearanceProvider>

      <View style={styles.container}>
        <RiderHome />
        <StatusBar style="auto" />
      </View>

    {/*<View style={styles.container}>
        <DriverHome />
        <StatusBar style="auto" />
      </View>*/}
    </LanguageWrapper>
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
