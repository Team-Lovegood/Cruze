import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function Language() {
  const Languages = { eng: 'eng', esp: 'esp', mand: 'mand'}
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(Languages.eng);
  const [items, setItems] = useState([
    {label: 'English', value: Languages.eng},
    {label: 'Español', value: Languages.esp},
    {label: '中文', value: Languages.mand}
  ]);

  return (
    <DropDownPicker
      style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={{width: 105}}
    />
  );
}
const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "#B3E5FD",
    borderWidth: 0,
    height: 40,
    fontSize: 12,
  }
});


export default Language;