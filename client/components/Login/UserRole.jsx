import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function UserRole() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'I am a rider', value: 'ride'},
    {label: 'I am a driver', value: 'drive'},
  ]);

  return (
    <DropDownPicker
      style={styles.dropdown}
      placeholder='I am a rider'
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#B3E5FD',
    borderColor: 'white',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 12,
    height: 40,
    width: 320
  }
});

export default UserRole;
