import React from "react";
import {
  Text,
  StyleSheet,
  Modal,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { useTheme } from "../../../../theme/themeProvider.js";
import { LanguageContext } from "../../../languages/index";
const WhereTo = ({ tripStatus, handleStatus, profileOpen, name }) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text,
  };
  const safeStyle = {
    backgroundColor: colors.background,
  };
  if (tripStatus === "whereTo" && !profileOpen) {
    return (
      <View style={[styles.container, safeStyle]}>
        <Text style={[styles.welcomeMessage, textStyle]}>
          {languagePackages?.Hello} {name}
        </Text>
        <Pressable onPress={() => handleStatus("searchTrip")}>
          <View pointerEvents="none">
            <TextInput
              style={styles.textInput}
              placeholder={languagePackages?.WhereToGo}
              placeholderTextColor={textStyle.color}
            />
          </View>
        </Pressable>
      </View>
    );
  } else {
    return null;
  }
};

export default WhereTo;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  textInput: {
    padding: 15,
    fontSize: 20,
  },
  welcomeMessage: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
