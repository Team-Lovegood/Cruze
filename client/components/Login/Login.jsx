import React, { useState, useEffect } from 'react';
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
  const [role, setRole] = useState(Roles.rider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState({});

  const { children } = props;
  const { colors, isDark } = useTheme();

  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background
  }
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  useEffect(() => {
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
        //Sign in with firebase, pass user info for Postgres get.
        const user = userCredential.user;
        user.role = role;
        // return user information for promise chaining
        return user;
      })
      .then(user => {
        var profile = {
          params: {
            role: user.role,
            email: user.email
          }
        }
        // get postgres user information where firebase email matches postgres email
        axios.get(`http://${macIP}:3000/profile`, profile)
        .then((response) => {
          response.data[0].role = role;
          // return postgres information for more chaining
          setProfile(response.data[0]);
          return response.data[0];
          // console.warn(props.auth);
        })
        .then(data => {
          // render next page according to profile role
          if (data.role  === 'riders') {
            props.riderHome();
          } else if (data.role === 'drivers') {
            props.driverHome();
          }
        })
        .catch(err => {
          alert(err);
        })
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={[styles.container, safeStyle]}>
        <LanguageSelecter />
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={logo}/>
        <Text style={styles.text}>Cruze</Text>
      </View>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
          style={{flex:1}}
          showsVerticalScrollIndicator={false}>
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
        placeholder={languagePackages?.Email}
        placeholderTextColor = 'black'
        value={email}
        onChangeText={(text) => setEmail(text)}/>
      <TextInput style = {styles.input}
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
      <Text style={styles.signupText}>
        {languagePackages?.DonnotHaveAnAccount}{" "}
        <Text style={styles.signup} onPress={props.signup}>
          {languagePackages?.Signup}
        </Text>
      </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
    marginTop: 100,
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
    borderWidth: 0
  },
});

export default Login;