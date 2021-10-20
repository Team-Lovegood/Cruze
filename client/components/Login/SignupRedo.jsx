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
  rider: "riders",
  driver: "drivers",
};

import logo from "../../../assets/logo.png";
const SignupRedo = (props) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { value: Roles.rider, label: "I want to ride" },
    { value: Roles.driver, label: "I want to drive" },
  ]);
  const [role, setRole] = useState(Roles.rider);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [carCapacity, setCapacity] = useState("");
  const [next, setNext] = useState(false);
  const [profile, setProfile] = useState({});
  const { children } = props;
  const { colors, isDark } = useTheme();

  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background
  }

  const handleRiderSignup = () => {
    auth
      //Create firebase account
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        user.firstName = firstName;
        user.lastName = lastName;
        user.role = role;
        // return account infor for promise chaining
        return user;
      })
      // we get user info, insert into postgres based on role
      .then(user => {
        var profile = {
          params: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
          }
        }
        //axios post to riders table
        axios.post(`http://192.168.1.130:3000/riders`, profile)
          .then((response) => {
            // return profile to render next page
            return profile;
          })
          .then((profile) => {
            // get user information with matching email.
            axios.get('http://192.168.1.130:3000/profile', profile)
            .then((response) => {
              response.data[0].role = role;
              // return postgres data
              setProfile(response.data[0]);
              return response.data[0];
            })
            .then(data => {
              //render next page according to profile role
              props.riderHome();
            })
            .catch(err => {
              alert(err);
            })
        })
      })
      .catch(error => alert(error.message))
  }
  return (
    <SafeAreaView style={[styles.container, safeStyle]}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.appName}>Cruze</Text>
      </View>

      {!next ?
        <View>
          <DropDownPicker
              style={styles.roleSelecter}
              open={open}
              setOpen={setOpen}
              value={role}
              items={items}
              setValue={setRole}
              setItems={setItems}
              containerStyle={{width: 320}}
            />
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
      </View>
      :
        <View>
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
        </View>
        }

      {role === Roles.rider ?
        <TouchableOpacity
          style={styles.signup}
          onPress={handleRiderSignup}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      :
        <TouchableOpacity
        style={styles.signup}
        onPress={setNext(true)}>
        <Text style={styles.signupText}>Next</Text>
        </TouchableOpacity>
      }

      <View>
        <Text style={[styles.loginText, textStyle]}>Already have an account? <Text style={[styles.login, textStyle]} onPress={props.login}>Log in</Text></Text>
      </View>
    </SafeAreaView>
  );
};
export default SignupRedo;
