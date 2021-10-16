import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker } from 'react-native';
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
          <Text style={styles.text}>Cruze</Text>
        </View>

        {/* <UserRole role={this.state.role} handleRole={this.handleRole.bind(this)}/> */}

        <TextInput style = {styles.input}
          placeholder = "Email"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          onChangeText = {this.handleEmail}/>
        <TextInput style = {styles.input}
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
  text: {
    color: '#B3E5FD',
    fontSize: 36,
    alignSelf: 'center',

  },
  input: {
    backgroundColor: '#B3E5FD',
    // outlineColor: 'black',
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
  logo: {
    width: 100,
    height: 100,
  },
  logoBox: {
    marginTop: 200,
  },
  signup: {
    textDecorationLine: 'underline'
  }
});

export default Login;