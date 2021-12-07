import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../../theme/themeProvider.js';
import { LanguageContext } from "../../../languages/index";

const ToDestination = ({tripStatus, distance, duration, handleStatus, profileOpen, carInfo}) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background,
  }
  const distanceRate = 1.5;
  const durationRate = 0.1;
  const price = Number(distanceRate*distance.value/1000 + durationRate*duration.value/60).toFixed(2);

  if ((tripStatus === 'onTheWay' && !profileOpen) || (tripStatus === 'pickUp' && !profileOpen)) {
    return (
      <View style={[styles.topContainer, safeStyle]}>
        <View style={[styles.driverContainer, safeStyle]}>
          <Text style={[styles.driverStatus, textStyle]}>{tripStatus === 'onTheWay' ? languagePackages?.DriverOnTheWay : languagePackages?.HeadingToDestination}</Text>
          <Text style={[styles.bill, textStyle]}>${price}</Text>
        </View>
        <View style={[styles.driverContainer, safeStyle]}>
          <Text style={[styles.tripInfo, textStyle]}>{distance.text}</Text>
          <Text style={[styles.tripInfo, textStyle]}>{duration.text}</Text>
        </View>
        <View style={styles.carContainer}>
          <Text style={styles.carInfo}>{carInfo.firstname}{"\n"}{carInfo.carmodel}</Text>
          <FontAwesomeIcon style={styles.car} size={40} icon={faCar} />
          <Text style={styles.carInfo}>{carInfo.licenseplate}</Text>
        </View>
      </View>
    );
  } else {
    return null
  }
};

export default ToDestination;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1.5,
    justifyContent: 'space-evenly',
    marginBottom: 10
  },

  driverContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  driverStatus: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15
  },

  bill: {
    padding: 15,
    fontSize: 25
  },

  carContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B3E5FD',
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    bottom: 20
  },

  carInfo: {
    fontSize: 20,
    padding: 15
  },

  tripInfo: {
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20
  }
});