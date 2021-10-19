import React from 'react';
import { Text, StyleSheet, Modal, View, SafeAreaView, TextInput, Pressable } from 'react-native';

const WhereTo = ({tripStatus, handleStatus }) => {
  if(tripStatus === 'whereTo') {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Hello Rider</Text>
        <Pressable onPress={() => handleStatus('searchTrip')}>
          <View pointerEvents="none">
              <TextInput
                style={styles.textInput}
                placeholder="Where to ?"
              />
            </View>
          </Pressable>
      </View>
    )
  } else {
    return null
  }
};

export default WhereTo;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  textInput: {
    padding: 15,
    fontSize: 20
  },
  welcomeMessage: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold'
  },
});