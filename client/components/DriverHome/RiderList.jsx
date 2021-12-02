import React, { useState } from "react";
import { FlatList, Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTheme } from '../../../theme/themeProvider.js';
import { LanguageContext } from "../../languages/index";

const RiderList = ({ changeRider, trip, name }) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text
  };
  const safeStyle = {
    backgroundColor: colors.background,
  }
  const handlePress = (item) => {
    changeRider(item);
  }
  const dummyData = [
    {
      name: 'Jordan',
      address: '134 main st',
      distance: 2.2,
      amount: 18,
      location: {
        latitude: 40.7309,  //washington sqs
        longitude: -73.9973
      },
      destination: {
        latitude: 40.7653266,  //central park
        longitude: -73.9760929
      }
    },
    {
      name: 'Jin',
      address: '134 main st',
      distance: 5.8,
      amount: 60,
      location: {
        latitude: 40.6318468,  //fort hamilton
        longitude: -73.9986357
      },
      destination: {
        latitude: 40.7579593,  //time sq
        longitude: -73.9855378
      }
    },
    {
      name: 'David',
      address: '134 main st',
      distance: 2.2,
      amount: 10,
      location: {
        latitude: 40.7309,
        longitude: -73.9973
      },
      destination: {
        latitude: 40.7579593,
        longitude: -73.9855378
      }
    },
    {
      name: 'Samantha',
      address: '134 main st',
      distance: 2.2,
      amount: 10,
      location: {
        latitude: 40.7309,
        longitude: -73.9973
      },
      destination: {
        latitude: 40.7579593,
        longitude: -73.9855378
      }
    },
    {
      name: 'Sebastian',
      address: '134 main st',
      distance: 2.2,
      amount: 10,
      location: {
        latitude: 40.7309,
        longitude: -73.9973
      },
      destination: {
        latitude: 40.7579593,
        longitude: -73.9855378
      }
    },
  ]
  if (trip.name) {
    const temp = {
      name: trip.name,
      address: trip.destination.name,
      distance: 2.2,
      amount: 10,
      location: trip.departure,
      destination: trip.destination
    }
    dummyData[0] = temp;
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.title, textStyle]}>
      {languagePackages?.Hello} {name}
      </Text>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.name}
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
    borderRadius: 4,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});

export default RiderList;