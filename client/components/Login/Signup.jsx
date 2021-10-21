import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Button, Image,  TouchableOpacity, SafeAreaView, LogBox} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { auth } from '../../../firebase';
import axios from 'axios';
import { useTheme } from '../../../theme/themeProvider.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { macIP } from '../../../ip.js';
import LanguageSelecter from "../Login/DropdownLanguage";
import { LanguageContext } from "../../languages/index";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  logoBox: {
    marginTop: 100,
    flexDirection: 'row',
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
const Signup = (props) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const riderTip = languagePackages?.IWantToRide;
  const driverTip = languagePackages?.IWantToDrive;
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { value: Roles.rider, label: riderTip },
    { value: Roles.driver, label: driverTip },
  ]);
  const [role, setRole] = useState(Roles.rider);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [carCapacity, setCarCapacity] = useState();
  const [licensePlate, setLicensePlate] = useState("");
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
      { value: Roles.rider, label: languagePackages?.IWantToRide },
      {
        value: Roles.driver,label: languagePackages?.IWantToDrive
      },
    ]);
  }, [languagePackages]);

  const handleSignup = () => {
    auth
      //Create firebase account
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        user.firstName = firstName;
        user.lastName = lastName;
        user.phone = phone;
        user.role = role;

        if (user.role === 'drivers') {
          user.carMake = carMake;
          user.carModel = carModel;
          user.carColor = carColor;
          user.licensePlate = licensePlate;
          user.carCapacity = carCapacity;
        }
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
            phone: user.phone,
            role: user.role
          }
        }
        // if user is driver, add user car information
        if (user.role === Roles.driver) {
          profile.params.carMake = user.carMake
          profile.params.carModel = user.carModel
          profile.params.carColor = user.carColor
          profile.params.licensePlate = user.licensePlate
          profile.params.carCapacity = user.carCapacity
        }
        //axios post
        axios.post(`http://${macIP}:3000/${user.role}`, profile)
          .then((response) => {
            // return profile to render next page
            return profile;
          })
          .then((profile) => {
            // get user information with matching email.
            axios.get(`http://${macIP}:3000/profile`, profile)
            .then((response) => {
              response.data[0].role = role;
              // return postgres data
              setProfile(response.data[0]);
              return response.data[0];
            })
            .then(data => {
              //render next page according to profile role
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
          <Image style={styles.logo} source={logo} />
          <Text style={styles.appName}>Cruze</Text>
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
        <View style={styles.doubleInputBox}>
            <TextInput
              style={styles.doubleInput}
              value={firstName}
              placeholderTextColor = "black"
              onChangeText={(text) => setFirstName(text)}
              placeholder={languagePackages?.FirstName}
            />
            <TextInput
              style={styles.doubleInput}
              value={lastName}
              placeholderTextColor = "black"
              onChangeText={(text) => setLastName(text)}
              placeholder={languagePackages?.LastName}
            />
        </View>
        <View style={styles.doubleInputBox}>
          <TextInput
            style={styles.doubleInput}
            textContentType="emailAddress"
            autoCapitalize = "none"
            placeholder={languagePackages?.Email}
            placeholderTextColor = "black"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.doubleInput}
            placeholder={languagePackages?.Phone}
            placeholderTextColor = "black"
            value={phone}
            onChangeText={(text) => setPhone(text)}
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
            placeholder={languagePackages?.Password}
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
                placeholder={languagePackages?.CarMake}
              />
              <TextInput
                style={styles.doubleInput}
                value={carModel}
                placeholderTextColor = "black"
                onChangeText={(text) => setCarModel(text)}
                placeholder={languagePackages?.CarModel}
              />
            </View>
            <View style={styles.doubleInputBox}>
              <TextInput
                style={styles.doubleInput}
                value={carColor}
                placeholderTextColor = "black"
                onChangeText={(text) => setCarColor(text)}
                placeholder={languagePackages?.CarColor}
              />
              <TextInput
                style={styles.doubleInput}
                value={carCapacity}
                onChangeText={(text) => setCarCapacity(text)}
                placeholderTextColor = "black"
                placeholder={languagePackages?.CarCapacity}
              />
            </View>
            <View style={styles.singleInputBox}>
            <TextInput
                style={styles.singleInput}
                value={licensePlate}
                onChangeText={(text) => setLicensePlate(text)}
                placeholderTextColor = "black"
                placeholder={languagePackages?.LicensePlate}
              />
            </View>
          </>
        )}
        <TouchableOpacity
          style={styles.signup}
          onPress={handleSignup}>
          <Text style={styles.signupText}>{languagePackages?.Signup}</Text>
        </TouchableOpacity>
        <View>
          <Text style={[styles.loginText, textStyle]}>{languagePackages?.AlreadyHaveAnAccount} <Text style={[styles.login, textStyle]} onPress={props.login}>{languagePackages?.LogIn}</Text></Text>
        </View>
        </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Signup;
