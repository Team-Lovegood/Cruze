import React, { useState } from "react";
import { Switch } from "react-native";
import { useTheme } from '../../../theme/themeProvider.js';

const Theme = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { setScheme, isDark } = useTheme();
  const toggleScheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  }
  return (
    <Switch
      trackColor={{ false: '#B3E5FD', true: 'gainsboro' }}
      thumbColor={isEnabled ? '#B3E5FD' : '#B3E5FD'}
      ios_backgroundColor= 'gainsboro'
      onValueChange={() => {toggleSwitch(); toggleScheme()}}
      value={isEnabled}
    />
  );
}

export default Theme;