import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LanguageContext, setLanToLocal } from "../../languages/index";
import axios from "axios";
import { macIP } from "../../../ip.js";

function Language() {
  const { setLanguagesPackages, lan, setLan } =
    React.useContext(LanguageContext);
  const Languages = { eng: "eng", esp: "esp", mand: "mand" };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(lan);
  const [items, setItems] = useState([
    { label: "English", value: Languages.eng },
    { label: "Español", value: Languages.esp },
    { label: "中文", value: Languages.mand },
  ]);
  let lanLabel = items.find((item) => item.value === lan);
  lanLabel = (lanLabel && lanLabel.label) || "English";

  useEffect(() => {
    let lang = "en";
    if (lan === Languages.eng) {
      lang = "en";
    } else if (lan === Languages.esp) {
      lang = "es";
    } else if (lan === Languages.mand) {
      lang = "cn";
    }
    setValue(lan);
    const fetchLanguagePackage = async () => {
      const res = await axios.get(`http://${macIP}:3000/languages/${lang}`);
      if (res && res.data && res.data.data) {
        if (setLanguagesPackages) {
          setLanguagesPackages(res.data.data);
          // setLanToLocal(lan);
        }
      }
    };
    fetchLanguagePackage();
  }, [lan]);

  return (
    <DropDownPicker
      placeholder={lanLabel}
      style={styles.dropdown}
      open={open}
      value={value}
      setValue={setValue}
      items={items}
      setOpen={setOpen}
      onChangeValue={(val) => {
        setLanToLocal(val);
        setLan(val);
      }}
      setItems={setItems}
      containerStyle={{ width: 105, marginLeft: 215 }}
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
  },
});

export default Language;
