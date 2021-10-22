import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../../theme/themeProvider.js';

const OnTheWay = ({ rider, arrivedToDestination, distance }) => {
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background,
  }
  const handleArrivedPress = () => {
    arrivedToDestination();
  }

  return (
    <View style={[styles.container, safeStyle]}>
      <View style={styles.text}>
        <Text style={[styles.onTheWay, textStyle]}>
          On the way
        </Text>
        <Text style={[styles.distance, textStyle]}>
          {distance} mi
        </Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>
          {rider.address}
        </Text>
        <View>
          <TouchableOpacity
            onPress={handleArrivedPress}
          >
            <Image
              source={require('../../../assets/arrive.png')}
              style={{ width: 45, height: 45, marginLeft: 3 }}
            />
          <Text style={{fontWeight: '600', marginTop: -5, color: textStyle.color}}>Arrived</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  onTheWay: {
    marginLeft: 40,
    fontWeight: '600',
    fontSize: 25
  },
  distance: {
    marginRight: 40,
    marginTop: 6,
    fontWeight: '600',
    fontSize: 22,
  },
  address: {
    width: '70%',
    fontSize: 25,
    paddingVertical: 11,
    paddingLeft: 20,
    backgroundColor: "#B3E5FD",
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    borderRadius: 10,
    overflow: 'hidden'
  },
  // hereBtn: {
  //   width: 28,
  //   height: 28,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 5,
  //   padding: 10,
  //   borderRadius: 100,
  //   backgroundColor: '#C4C4C4',
  // },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20,
  }
});

export default OnTheWay;