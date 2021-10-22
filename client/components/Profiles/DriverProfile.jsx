import React, { useEffect }from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Theme from './SwitchTheme.jsx';
import { useTheme } from '../../../theme/themeProvider.js';
import Language from '../Login/DropdownLanguage.jsx';
import LanguageSelecter from "../Login/DropdownLanguage";
import { LanguageContext } from "../../languages/index";

const DriverProfile = (props) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const { children } = props;
  const { colors, isDark } = useTheme();

  const textStyle = {
    fontSize: 18,
    color: colors.text,
  };
  const safeStyle = {
    flex: 1,
    backgroundColor: colors.background
  }

  return (
    <SafeAreaView style={safeStyle}>

      {/* <View style={styles.map}></View> */}

      {/* <View style = {styles.profile}>
        <View style = {styles.top}>
          <Text style={textStyle}>{props.userProfile.firstname}{' '}{props.userProfile.lastname}</Text>
          <Text style={textStyle}>4.8<Text style={{color: '#B3E5FD', fontSize: 18}}>&#9733;</Text></Text>
        </View>
      <View style={styles.top}>
        <Text style={textStyle}>{props.userProfile.carcolor}{' '}{props.userProfile.carmake}{' '}{props.userProfile.carmodel}{' '}</Text>
        <Text style={textStyle}>{props.userProfile.licenseplate}</Text>
      </View> */}

      <View style = {styles.profile}>
        <View style = {styles.top}>
          <Text style={textStyle}>First Last</Text>
          <Text style={textStyle}>4.8<Text style={{color: '#B3E5FD', fontSize: 18}}>&#9733;</Text></Text>
        </View>
        <View style={styles.top}>
          <Text style={textStyle}>Color Make Model</Text>
          <Text style={textStyle}>Plate</Text>
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
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 2,
    backgroundColor: '#B3E5FD'
  },
  profile:{
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  languageSelecterBox: {
    position: "absolute",
    right: 50,
    top: 100,
  },
});

export default DriverProfile;
