import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider } from "react-native-appearance";
import {
  LoginScreen,
  SignupScreen,
  RiderHomeScreen,
  RiderProfileScreen,
  DriverHomeScreen,
  DriverProfileScreen,
} from "./Screens.js";
import { ThemeProvider } from "./theme/themeProvider.js";
import RiderHome from "./client/components/RiderHome/RiderHome.jsx";
import DriverHome from "./client/components/DriverHome/DriverHome.jsx";
import { LanguageWrapper } from "./client/languages/index";

const AuthStack = createStackNavigator();

export default function App() {
  const [communication, setCommunication] = useState(true);

  const handleCommunication = () => {
    setCommunication(!communication);
  };
  useEffect(() => {
    LogBox.ignoreLogs([
      "VirtualizedLists should never be nested",
      "Unhandled promise rejection: Error: timeout exceeded",
      "Unhandled promise rejection: Error: Network Error",
    ]);
  }, []);

  return (
    <>
      <LanguageWrapper>
        <ThemeProvider>
          <AppearanceProvider>
            <NavigationContainer>
              <AuthStack.Navigator>
                <AuthStack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />

                <AuthStack.Screen
                  name="Signup"
                  component={SignupScreen}
                  options={{ headerShown: false }}
                />

                <AuthStack.Screen
                  name="RiderHome"
                  component={RiderHomeScreen}
                  options={{ headerShown: false }}
                />

                <AuthStack.Screen
                  name="DriverHome"
                  component={DriverHomeScreen}
                  options={{ headerShown: false }}
                />
              </AuthStack.Navigator>
            </NavigationContainer>
          </AppearanceProvider>
        </ThemeProvider>
      </LanguageWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
