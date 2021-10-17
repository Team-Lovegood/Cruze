import { Text } from 'react-native';
import Login from './client/components/Login/Login.jsx';
import Signup from './client/components/Login/Signup.jsx';

export const LoginScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      {/* <Login /> */}
      <Text>Login</Text>
    </ScreenContainer>
  );
};

export const SignupScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      {/* <Signup /> */}
      <Text>Sign up</Text>
    </ScreenContainer>
  );
};