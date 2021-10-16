import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, Image } from 'react-native';
import UserRole from './UserRole.jsx';
import logo from "../../../assets/logo.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 'rider',
      email: '',
      password: ''
    }
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleRole = (e) => {
    this.setState({ role: e })
  }
  login = (email, pass, role) => {
    alert(`email: ${email} password: ${pass} role: ${role}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image style={styles.logo} source={logo}/>
          <Text style={styles.text}>Cruze</Text>
        </View>

        {/* <UserRole role={this.state.role} handleRole={this.handleRole.bind(this)}/> */}

        <TextInput style = {styles.input}
          placeholder = "Role selector placeholder"
          placeholderTextColor = "black"
          autoCapitalize = "none"/>

        <TextInput style = {styles.input}
          textContentType='emailAddress'
          placeholder = "Email"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          onChangeText = {this.handleEmail}/>
        <TextInput style = {styles.input}
          textContentType='password'
          placeholder = "Password"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          onChangeText = {this.handlePassword}/>
        <TouchableOpacity
          style={styles.login}
          onPress={
            () => this.login(this.state.email, this.state.password, this.state.role)
          }>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>Don't have an account? <Text style={styles.signup} onClick={this.props.signup}>Sign up</Text></Text>
    </View>
    )
  }
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
  }
});

export default Login;