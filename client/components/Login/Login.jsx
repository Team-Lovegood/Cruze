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
    this.setState({ role: e.target.value })
  }
  login = (email, pass, role) => {
    alert('email: ' + email + ' password: ' + pass + ' role: ' + role)
  }

  render() {
    return (
      <View>
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
    marginTop: -200,
    marginBottom: 25,
    color: '#B3E5FD',
    fontSize: 36,
  },
  logo: {
    width: 50,
    height: 50
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