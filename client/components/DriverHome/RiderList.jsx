import React, { useState } from "react";
import { FlatList, Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RiderList = ({ toggleRiderList, toggleRiderPickup, changeRider }) => {

  const handlePress = (item) => {
    changeRider(item);
    toggleRiderList();
    toggleRiderPickup();
  }
  const dummyData = [
    {
      name: 'Jordan',
      address: '134 main st',
      distance: 2.2,
      amount: 10,
      location: {
        latitude: 40.7309,  //washington sqs
        longitude: -73.9973
      }
    },
    {
      name: 'Jin',
      address: '134 main st',
      distance: 5.8,
      amount: 60,
      location: {
        latitude: 40.6413109,
        longitude: -73.9928549
      }
    },
    {
      name: 'David',
      address: '134 main st',
      distance: 2.2,
      amount: 10,
      location: {
        latitude: 40.6413109,
        longitude: -73.9928549
      }
    },
    {
      name: 'Isaac',
      address: '134 main st',
      distance: 2.2,
      amount: 10,
      location: {
        latitude: 40.6413109,
        longitude: -73.9928549
      }
    },
    {
      name: 'Sebastian',
      address: '134 main st',
      distance: 2.2,
      amount: 10,
      location: {
        latitude: 40.6413109,
        longitude: -73.9928549
      }
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, Tim
      </Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) =>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => { handlePress(item) }}
          >
            <Text
              style={styles.btnText}>
                {item.name}
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 3
  },
  title: {
    borderColor: "#20232a",
    color: "#20232a",
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold"
  },
  btnText: {
    fontSize: 18,
  },
  btn: {
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: "#B3E5FD",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});

export default RiderList;