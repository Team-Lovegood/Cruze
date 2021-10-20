import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Image,  TouchableOpacity, SafeAreaView, KeyboardAvoidingView} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { auth } from '../../../firebase';
import axios from 'axios';
import { useTheme } from '../../../theme/themeProvider.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  logoBox: {
    marginTop: 100,
    flexDirection: 'row'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginRight: -55
  },
  appName: {
    color: "#B3E5FD",
    fontSize: 36,
    alignSelf: 'center'
  },
  roleSelecter: {
    overflow: "hidden",
    marginBottom: 20,
    zIndex: 100,
    width: 320,
    height: 40,
    backgroundColor: "#B3E5FD",
    fontSize: 12,
    position: "relative",
    borderWidth: 0
  },
  doubleInputBox: {
    marginBottom: 20,
    fontSize: 12,
    width: 320,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  doubleInput: {
    padding: 10,
    width: 150,
    height: 40,
    fontSize: 12,
    borderRadius: 8,
    backgroundColor: "#B3E5FD",
  },
  singleInputBox: {
    marginBottom: 20,
    fontSize: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  singleInput: {
    width: 320,
    fontSize: 12,
    height: 40,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#B3E5FD",
  },
  signup: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'gainsboro',
    borderRadius: 8,
    height: 30,
    width: 150,
    marginTop: 20
  },
  signupText: {
    alignSelf: 'center',
    fontSize: 12,
  },
  loginText: {
    alignSelf: 'center',
    fontSize: 10,
    marginTop: 5
  },
  login: {
    textDecorationLine: 'underline'
  },
});


import logo from "../../../assets/logo.png";
const RegisterCar = (props) => {

  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [carCapacity, setCapacity] = useState("");
  const { children } = props;
  const { colors, isDark } = useTheme();

  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background
  }

  return (
    <SafeAreaView style={[styles.container, safeStyle]}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.appName}>Cruze</Text>
      </View>

      <View style={styles.doubleInputBox}>
        <TextInput
          style={styles.doubleInput}
          value={carMake}
          placeholderTextColor = "black"
          onChangeText={(text) => setCarMake(text)}
          placeholder="Car make"
        />
        <TextInput
          style={styles.doubleInput}
          value={carModel}
          placeholderTextColor = "black"
          onChangeText={(text) => setCarModel(text)}
          placeholder="Car model"
        />
      </View>
      <View style={styles.doubleInputBox}>
        <TextInput
          style={styles.doubleInput}
          value={carColor}
          placeholderTextColor = "black"
          onChangeText={(text) => setCarColor(text)}
          placeholder="Car color"
        />
      <TextInput
          style={styles.doubleInput}
          value={carCapacity}
          onChangeText={(text) => setCapacity(text)}
          placeholderTextColor = "black"
          placeholder="Car capacity"
        />
      </View>
        <TextInput
          style={styles.singleInput}
          value={licensePlate}
          onChangeText={(text) => setLicensePlate(text)}
          placeholderTextColor = "black"
          placeholder="License plate"
        />

      <TouchableOpacity
        style={styles.signup}
        onPress={console.warn('poo')}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
      <View>
        <Text style={[styles.loginText, textStyle]}>Already have an account? <Text style={[styles.login, textStyle]} onPress={props.login}>Log in</Text></Text>
      </View>
    </SafeAreaView>
  );
};
export default RegisterCar;
