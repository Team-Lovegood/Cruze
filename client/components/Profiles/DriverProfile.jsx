import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Theme from './SwitchTheme.jsx';
import { useTheme } from '../../../theme/themeProvider.js';

const DriverProfile = (props) => {
  const { children } = props;
  const { colors, isDark } = useTheme();

  const textStyle = {
    fontSize: 24,
    color: colors.text
  };
  const safeStyle = {
    flex: 1,
    backgroundColor: colors.background
  }
  return (
    <SafeAreaView style={safeStyle}>
      <View style={styles.map}></View>
      <View style = {styles.profile}>
        <View style = {styles.top}>
          <Text style={textStyle}>Jake E Jake</Text>
          <Text style={textStyle}>4.8<Text style={{color: '#B3E5FD', fontSize: 18}}>&#9733;</Text></Text>
        </View>
        <View style={styles.top}>
          <Text style={textStyle}>Green Kia Soul</Text>
          <Text style={textStyle}>Intern101</Text>
        </View>
        <View style = {styles.top}>
          <Text style={textStyle}>Theme</Text>
          <Theme />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 3,
    backgroundColor: '#B3E5FD'
  },
  profile:{
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 15,
  },
});

export default DriverProfile;
