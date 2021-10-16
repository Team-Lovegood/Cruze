import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const UserRole = ({role, handleRole, RideStr, DriveStr}) => {
  const [selectedValue, setSelectedValue] = useState(RideStr);
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) => {
          handleRole(itemValue);
          setSelectedValue(itemValue);
        }}
      >
        <Picker.Item label={RideStr} value="rider" />
        <Picker.Item label={DriveStr} value="driver" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#B3E5FD',
    borderColor: 'white',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    outlineWidth: 1,
    borderRadius: 8,
    fontSize: 12,
    height: 40,
    width: 320
  }
});

export default UserRole;