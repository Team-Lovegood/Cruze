import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import UserRole from './UserRole.jsx';

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
    console.log(`email: ${email} password: ${pass} role: ${role}`)
  }

  render() {
    return (
      <View>
        <img
        style={{ height: 80, width: 80, position: 'fixed', top: 140, left: 100 }}
        src='https://cdn4.iconfinder.com/data/icons/water-waves-design/1470/c_letter_logo_water_wave_blue_ocean-512.png'
        />
        <Text style={styles.text}>Cruze</Text>
        <UserRole role={this.state.role} handleRole={this.handleRole.bind(this)}/>
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
        <Text style={styles.signupText}>Don't have an account? <u>Sign up</u></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: '#B3E5FD',
    fontSize: 36,
    marginTop: -200,
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#B3E5FD',
    outlineColor: 'black',
    textAlign: 'center',
    marginBottom: 25,
    outlineWidth: 1,
    borderRadius: 8,
    fontSize: 12,
    height: 35,
    width: 250
  },
  login: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'gainsboro',
    borderRadius: 8,
    height: 25,
    width: 150
  },
  loginText: {
    alignSelf: 'center',
    fontSize: 12,
  },
  signupText: {
    alignSelf: 'center',
    fontSize: 10
  }
});

export default Login;