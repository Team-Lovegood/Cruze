import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { LanguageContext, getLanFromLocal, setLanToLocal} from "../../languages/index";
import axios from "axios";
import { macIP } from '../../../ip.js';

function Language() {
  const { setLanguagesPackages } = React.useContext(LanguageContext);
  const Languages = { eng: 'eng', esp: 'esp', mand: 'mand'}
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(Languages.eng);
  const [items, setItems] = useState([
    {label: 'English', value: Languages.eng},
    {label: 'Español', value: Languages.esp},
    {label: '中文', value: Languages.mand}
  ]);

  useEffect(() => {
    getLanFromLocal().then((lan) => {
      setValue(lan);
    });
  }, []);

  useEffect(() => {
    let lan = "en";
    if (value === Languages.eng) {
      lan = "en";
    } else if (value === Languages.esp) {
      lan = "es";
    } else if (value === Languages.mand) {
      lan = "cn";
    }
    const fetchLanguagePackage = async () => {
      const res = await axios.get(
        `http://${macIP}:3000/languages/${lan}`
      );
      if (res && res.data && res.data.data) {
        if (setLanguagesPackages) {
          setLanguagesPackages(res.data.data);
          // setLanToLocal(lan);
        }
      }
    };
    fetchLanguagePackage();
  }, [value]);

  return (
    <DropDownPicker
      placeholder="English"
      style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={{width: 105, marginLeft: 215}}
    />
  );
}
const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "#B3E5FD",
    borderColor: "white",
    borderWidth: 0,

    height: 40,
    fontSize: 12,
  }
});


export default Language;