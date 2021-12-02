import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useTheme } from "../../../theme/themeProvider.js";
import { LanguageContext } from "../../languages/index";
const OnTheWay = ({ rider, arrivedToDestination, distance }) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text,
  };
  const safeStyle = {
    backgroundColor: colors.background,
  };
  const handleArrivedPress = () => {
    arrivedToDestination();
  };

  return (
    <View style={[styles.container, safeStyle]}>
      <View style={styles.text}>
        <Text style={[styles.onTheWay, textStyle]}>
          {languagePackages?.OnTheWay}
        </Text>
        <Text style={[styles.distance, textStyle]}>
          {distance} {languagePackages?.Km}
        </Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>{rider.address}</Text>
        <View>
          <TouchableOpacity onPress={handleArrivedPress}>
            <Image
              source={require("../../../assets/arrive.png")}
              style={{ width: 45, height: 45, marginLeft: 3 }}
            />
            <Text
              style={{
                fontWeight: "600",
                marginTop: -5,
                color: textStyle.color,
              }}
            >
              {languagePackages?.Arrived}
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
    justifyContent: "space-between",
    marginTop: 10,
  },
  onTheWay: {
    marginLeft: 45,
    fontWeight: "600",
    fontSize: 25,
  },
  distance: {
    marginRight: 40,
    marginTop: 3,
    fontWeight: "600",
    fontSize: 22,
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

export default OnTheWay;
