import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const UserRole = ({role, handleRole}) => {
  const [selectedValue, setSelectedValue] = useState("I want a ride.");
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="I want a ride" value="rider" />
        <Picker.Item label="I want to drive" value="driver" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#B3E5FD',
    borderColor: 'white',
    textAlign: 'center',
    marginBottom: 25,
    outlineWidth: 1,
    borderRadius: 8,
    fontSize: 12,
    height: 35,
    width: 250
  }
});

export default UserRole;