import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useTheme } from "../../../theme/themeProvider.js";
import { LanguageContext } from "../../languages/index";
const DriverPickup = ({ rider, onTheWay, distance }) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text,
  };
  const safeStyle = {
    backgroundColor: colors.background,
  };
  const handleOnTheWayPress = () => {
    onTheWay();
  };

  return (
    <View style={[styles.container, safeStyle]}>
      <View style={styles.text}>
        <Text style={[styles.pickupName, textStyle]}>
          {languagePackages?.PickingUp}: {rider.name}
        </Text>
        <Text style={[styles.name, textStyle]}>$ {rider.amount}</Text>
        <Text style={[styles.name, textStyle]}>
          {distance} {languagePackages?.Km}
        </Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>{rider.address}</Text>
        <View>
          <TouchableOpacity
            onPress={handleOnTheWayPress}
          >
            <Image
              source={require("../../../assets/car-xxl.png")}
              style={{ width: 45, height: 45, marginLeft: 8 }}
            />
            <Text
              style={{
                fontWeight: "600",
                marginTop: -5,
                color: textStyle.color,
              }}
            >
              {languagePackages?.PickedUp}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  pickupName: {
    fontWeight: "600",
    fontSize: 25,
  },
  name: {
    marginTop: 6,
    fontWeight: "600",
    fontSize: 18,
  },
  address: {
    width: "70%",
    fontSize: 25,
    paddingVertical: 11,
    paddingLeft: 20,
    backgroundColor: "#B3E5FD",
    borderRadius: 10,
    overflow: "hidden",
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20,
  },
});

export default DriverPickup;
