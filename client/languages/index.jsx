import React from "react";
import axios from "axios";
const useLangages = () => {
  const [languagePackages, setLanguagesPackages] = React.useState();
  return {
    languagePackages,
    setLanguagesPackages,
  };
};

export const LanguageContext = React.createContext({});
export const LanguageWrapper = ({ children }) => {
  const langaugeState = useLangages();
  React.useEffect(() => {
    const fetchLanguagePackage = async () => {
      const res = await axios.get("http://192.168.1.130:3000/languages/en");
      if (res && res.data && res.data.data) {
        if (langaugeState && langaugeState.setLanguagesPackages) {
          langaugeState.setLanguagesPackages(res.data.data);
        }
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
