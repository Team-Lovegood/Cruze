import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Theme from './SwitchTheme.jsx';
import { useTheme } from '../../../theme/themeProvider.js';
import Language from '../Login/DropdownLanguage.jsx';

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

      {/* <View style={styles.map}></View> */}

      <View style = {styles.profile}>
        <View style = {styles.top}>
          <Text style={textStyle}>First Last</Text>
          <Text style={textStyle}>4.8<Text style={{color: '#B3E5FD', fontSize: 18}}>&#9733;</Text></Text>
        </View>
        <View style={styles.top}>
          <Text style={textStyle}>Color Make Model</Text>
          <Text style={textStyle}>License plate</Text>
        </View>
        <View style = {styles.car}>
          <Text style={styles.text}>Language</Text>
          <Language />
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
