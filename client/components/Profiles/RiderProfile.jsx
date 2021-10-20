import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Theme from './SwitchTheme.jsx';
import { useTheme } from '../../../theme/themeProvider.js';

const RiderProfile = (props) => {
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
    <View style = {safeStyle}>
      <View style = {styles.top}>
        <Text style={textStyle}>Tim E Tim</Text>
        <Text style={textStyle}>4.9<Text style={{color: '#B3E5FD', fontSize: 18}}>&#9733;</Text></Text>
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
    flex: 4,
    backgroundColor: '#B3E5FD'
  },
   top: {
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     margin: 25,
   }
});


export default RiderProfile;