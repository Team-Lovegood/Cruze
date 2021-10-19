import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name='location-pin' size={20} color={'white'} />
      </View>
      <Text style={styles.text}>{data.description}</Text>
    </View>
  )
}

export default PlaceRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  iconContainer: {
    backgroundColor: '#B3E5FD',
    padding: 5,
    borderRadius: 50,
    marginRight: 15
  }
});