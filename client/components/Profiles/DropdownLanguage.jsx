import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';

function Language() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'English', value: 'eng'},
    {label: 'Español', value: 'esp'},
    {label: '中国人', value: 'mand'}
  ]);

  return (
    <DropDownPicker
      style={{marginLeft: 105, width: 105}}
      placeholder='English'
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}



export default Language;