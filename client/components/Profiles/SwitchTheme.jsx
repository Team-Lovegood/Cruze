import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const Theme = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#B3E5FD', true: 'black' }}
        thumbColor={isEnabled ? '#B3E5FD' : '#B3E5FD'}
        ios_backgroundColor= 'gainsboro'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Theme;