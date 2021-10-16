import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const RiderList = () => {

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Jordan'},
          {key: 'David'},
          {key: 'Luna'},
          {key: 'Sebastian'},
          {key: 'Isaac'},
          {key: 'Jin'}
        ]}
        renderItem={({item}) =>
          <Text
            style={styles.item}>
              {item.key}
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  item: {
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: "#B3E5FD",
    color: "#20232a",
    textAlign: "left",
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});

export default RiderList;