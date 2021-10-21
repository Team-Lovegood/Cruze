import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Theme from './SwitchTheme.jsx';
import { useTheme } from '../../../theme/themeProvider.js';
import Language from '../Login/DropdownLanguage.jsx';
import LanguageSelecter from "../Login/DropdownLanguage";
import { LanguageContext } from "../../languages/index";

const RiderProfile = (props) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const { children } = props;
  const { colors, isDark } = useTheme();
  const textStyle = {
    fontSize: 18,
    color: colors.text
  };
  const safeStyle = {
    flex: 1.5,
    backgroundColor: colors.background,
  }

  if (props.profileOpen) {
    return (
      <>
        <View View style={safeStyle} >
        {/* <View style={styles.map}></View> */}
        {/* <View style = {styles.top}>
          <Text style={textStyle}>{props.userProfile.firstname}{' '}{props.userProfile.lastname}</Text>
          <Text style={textStyle}>4.9<Text style={{color: '#B3E5FD', fontSize: 18}}>&#9733;</Text></Text>
        </View> */}
          <View style={styles.top}>
            <Text style={textStyle}>Tim E Tim</Text>
            <Text style={textStyle}>4.9<Text style={{ color: '#B3E5FD', fontSize: 18 }}>&#9733;</Text></Text>
          </View>

          <View style = {styles.top}>
            <Text style={[textStyle, {marginRight: -215}]}>{languagePackages?.Languages}</Text>
            <Language/>
          </View>

          <View style = {styles.top}>
            <Text style={textStyle}>{languagePackages?.Theme}</Text>
            <Theme />
          </View>
          <View style = {styles.top}>
            <Text
              style={[textStyle, {textDecorationLine: 'underline'}]}
              onPress={props.logout}
              >{languagePackages?.Logout}</Text>
          </View>
        </View >
      </>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 3,
    backgroundColor: '#B3E5FD'
  },
   top: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     margin: 10,
   },
});


export default RiderProfile;