import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Image, LogBox } from 'react-native';
import { auth } from '../../../firebase';
import axios from 'axios';
import { useTheme } from '../../../theme/themeProvider.js';
import { LanguageContext } from "../../languages/index";
import LanguageSelecter from "../Login/DropdownLanguage";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { macIP } from '../../../ip.js';

const Login = (props) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const Roles = { rider: "riders", driver: "drivers",};
  const riderTip = languagePackages?.IAmARider;
  const driverTip = languagePackages?.IAmADriver;
  const [items, setItems] = useState([
    { value: Roles.rider, label: riderTip },
    { value: Roles.driver, label: driverTip },
  ]);
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { children } = props;
  const { colors, isDark } = useTheme();

  const [userLoggedIn, setLoggedIn] = useState({});

  useEffect(() => {
    if (role === 'riders') {
      props.riderHome();
    } else if (role === 'drivers') {
      props.driverHome();
    }
  }, [userLoggedIn])

  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background
  }
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Unhandled promise rejection: Error: timeout exceeded', 'Unhandled promise rejection: Error: Network Error']);
  }, [])

  useEffect(() => {
    setItems([
      { value: Roles.rider, label: languagePackages?.IAmARider },
      {
        value: Roles.driver, label: languagePackages?.IAmADriver
      },
    ]);
  }, [languagePackages]);


  React.useEffect(() => {
    setItems([
      { value: Roles.rider, label: languagePackages?.IAmARider },
      {
        value: Roles.driver,
        label: languagePackages?.IAmADriver,
      },
    ]);
  }, [languagePackages]);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        user.role = role;
        return user;
      })
      .then((user) => {
        var profile = {
          params: {
            role: user.role,
            email: user.email
          }
        }
        axios.get(`http://${macIP}:3000/profile`, profile)
        .then(({data}) => {
          data[0].role = role;
          props.updateProfile(data[0]);
          setLoggedIn(data[0]);
        })
        .catch(err => {
          alert(err);
        })
      })
      .catch(error => alert(error.message))
  }

  const showUser = () => {
    console.warn(props.userProfile);
  }

  return (
    <SafeAreaView style={[styles.container, safeStyle]}>
        <LanguageSelecter />
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.text}>Cruze</Text>
      </View>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
          style={{flex:1}}
          showsVerticalScrollIndicator={false}>
      <DropDownPicker
          placeholder={languagePackages?.SelectARole}
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
        placeholder={languagePackages?.Email}
        placeholderTextColor = 'black'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        textContentType='password'
        placeholder={languagePackages?.Password}
        placeholderTextColor = 'black'
        autoCapitalize = "none"
        value={password}
        onChangeText = {(text) => setPassword(text)}/>
      <TouchableOpacity
        style={styles.login}
        onPress={handleLogin}>
        <Text style={styles.loginText}>{languagePackages?.LogIn}</Text>
      </TouchableOpacity>
      <Text style={[styles.signupText, textStyle]}>
        {languagePackages?.DonnotHaveAnAccount}{" "}
        <Text style={[styles.signup, textStyle]} onPress={props.signup}>
          {languagePackages?.Signup}
        </Text>
      </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lan: {
    position: "absolute",
    right: 100,
    top: 100,
  },
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
    marginRight: -55,
  },
  text: {
    color: "#B3E5FD",
    fontSize: 36,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#B3E5FD",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 12,
    height: 40,
    width: 320,
  },
  login: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "gainsboro",
    borderRadius: 8,
    height: 30,
    width: 150,
  },
  loginText: {
    alignSelf: "center",
    fontSize: 12,
  },
  signupText: {
    alignSelf: "center",
    fontSize: 10,
    marginTop: 5,
  },
  signup: {
    textDecorationLine: "underline",
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
});

export default Login;
