import React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { macIP } from "../../ip";

export const setLanToLocal = async (lan) => {
  try {
    await AsyncStorage.setItem("@language", lan);
  } catch (err) {
    alert("save lan error" + err);
  }
};

export const getLanFromLocal = async () => {
  try {
    const value = await AsyncStorage.getItem("@language");
    return value || "en";
  } catch (err) {
    alert(err);
    return "en";
  }
};

const useLangages = () => {
  const [languagePackages, setLanguagesPackages] = React.useState();
  const [lan, setLan] = React.useState();
  return {
    languagePackages,
    setLanguagesPackages,
    lan,
    setLan,
  };
};

export const LanguageContext = React.createContext({});
export const LanguageWrapper = ({ children }) => {
  const langaugeState = useLangages();
  React.useEffect(() => {
    const fetchLanguagePackage = async () => {
      try {
        const localLan = await getLanFromLocal();
        langaugeState.setLan(localLan);
        const res = await axios.get(
          `http://${macIP}:3000/languages/${localLan}`
        );
        if (res && res.data && res.data.data) {
          if (langaugeState && langaugeState.setLanguagesPackages) {
            langaugeState.setLanguagesPackages(res.data.data);
          }
        }
      } catch (err) {
        alert(err.message);
      }
    };
    fetchLanguagePackage();
  }, []);
  return (
    <LanguageContext.Provider value={langaugeState}>
      {children}
    </LanguageContext.Provider>
  );
};
