import React, { useState, useEffect } from 'react';
import logo from "../../../assets/logo.png";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, Image } from 'react-native';
import { auth } from '../../../firebase';
import axios from 'axios';

const Login = (props) => {
  const Roles = { rider: "rider", driver: "driver",};
  const [items, setItems] = useState([
    { value: Roles.rider, label: "I am a rider" },
    { value: Roles.driver, label: "I am a driver" },
  ]);
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(Roles.rider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        //Sign in with firebase, pass user info for Postgres get.
        const user = userCredential.user;
        user.role = role;
        return user;
      })
      // .then(user => {
      //   // Set params for Postgres query
      //   var profile = {
      //     params: {
      //       email: user.email,
      //       role: user.role
      //     }
      //   }
        // Postgres get
        // axios.get('http://localhost:3000/', profile)
        //   .then((response) => {
        //     console.log(response.data);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   })
      // })
      .then(user => {
        if (role  === 'rider') {
          props.riderHome();
        } else if (role === 'driver') {
          props.driverHome();
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={logo}/>
        <Text style={styles.text}>Cruze</Text>
      </View>

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


      <TextInput style = {styles.input}
        autoCapitalize = "none"
        textContentType='emailAddress'
        placeholder = "Email"
        placeholderTextColor = "black"
        value={email}
        onChangeText={(text) => setEmail(text)}/>
      <TextInput style = {styles.input}
        secureTextEntry={true}
        textContentType='password'
        placeholder = "Password"
        placeholderTextColor = "black"
        autoCapitalize = "none"
        value={password}
        onChangeText = {(text) => setPassword(text)}/>
      <TouchableOpacity
        style={styles.login}
        onPress={handleLogin}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>Don't have an account? <Text style={styles.signup} onPress={props.signup}>Sign up</Text></Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  logoBox: {
    marginTop: 200,
    flexDirection: 'row'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginRight: -55
  },
  text: {
    color: '#B3E5FD',
    fontSize: 36,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#B3E5FD',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 12,
    height: 40,
    width: 320
  },
  login: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'gainsboro',
    borderRadius: 8,
    height: 30,
    width: 150
  },
  loginText: {
    alignSelf: 'center',
    fontSize: 12,
  },
  signupText: {
    alignSelf: 'center',
    fontSize: 10,
    marginTop: 5
  },
  signup: {
    textDecorationLine: 'underline'
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
    borderColor: 'white'
  },
});

export default Login;