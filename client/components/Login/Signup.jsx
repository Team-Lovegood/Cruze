import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Image, Picker, TouchableOpacity} from "react-native";

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
  roleSelecterBox: {
    width: 320,
    padding: 10,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#B3E5FD",
  },
  roleSelecter: {
    height: 40,
    backgroundColor: "#B3E5FD",
    fontSize: 12,
    position: "relative",
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

const Roles = {
  rider: "rider",
  driver: "driver",
};

import logo from "../../../assets/logo.png";
const Signup = (props) => {
  const roles = [
    { value: Roles.rider, label: "I want to ride" },
    { value: Roles.driver, label: "I want to drive" },
  ];
  const [role, setRole] = useState(Roles.rider);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const renderRoles = () => {
    return roles.map((role) => {
      return (
        <Picker.Item key={role.value} label={role.label} value={role.value} />
      );
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.appName}>Cruze</Text>
      </View>

      {/* <View style={styles.roleSelecterBox}>
        <Picker
          selectedValue={role}
          style={styles.roleSelecter}
          onValueChange={(value) => {
            setRole(value);
          }}
        >
          {renderRoles()}
        </Picker>
      </View> */}
      <View style={styles.singleInputBox}>
        <TextInput
          style={styles.singleInput}
          placeholderTextColor = "black"
          placeholder="Role placeholder"
        />
      </View>

      <View style={styles.doubleInputBox}>

          <TextInput
            style={styles.doubleInput}
            value={firstName}
            placeholderTextColor = "black"
            onChangeText={(text) => setFirstName(text)}
            placeholder="First name"
          />
          <TextInput
            style={styles.doubleInput}
            value={lastName}
            placeholderTextColor = "black"
            onChangeText={(text) => setLastName(text)}
            placeholder="Last name"
          />

      </View>

      <View style={styles.singleInputBox}>
        <TextInput
          style={styles.singleInput}
          textContentType="emailAddress"
          autoCapitalize = "none"
          placeholder="Email"
          placeholderTextColor = "black"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.singleInputBox}>
        <TextInput
          style={styles.singleInput}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize = "none"
          value={password}
          placeholderTextColor = "black"
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
        />
      </View>

      {role === Roles.driver && (
        <>
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
              value={licensePlate}
              onChangeText={(text) => setLicensePlate(text)}
              placeholderTextColor = "black"
              placeholder="License Plate"
            />
          </View>
        </>
      )}

      <TouchableOpacity
        style={styles.signup}
        onPress={() => alert(email + password + role)}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>


      <View>
        <Text style={styles.loginText}>Already have an account? <Text style={styles.login} onPress={props.login}>Log in</Text></Text>
      </View>

    </View>
  );
};
export default Signup;
