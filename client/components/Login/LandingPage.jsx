import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

class LandingPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 'login'
    }
  }
  handleSignup() {
    this.setState({ page: 'signup' })
  }
  handleLogin() {
    this.setState({ page: 'login' })
  }



  render() {
    return (
      <>
      {/* {this.state.page === 'login' ? <Login signup={this.handleSignup.bind(this)}/> : <Signup login={this.handleLogin.bind(this)}/>} */}
      <Signup/>
      </>
    )
  }
}

export default LandingPage;