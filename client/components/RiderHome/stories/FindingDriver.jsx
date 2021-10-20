import React, {useEffect} from 'react';
import { Text, View, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const FindingDriver = ({ tripStatus, handleStatus }) => {

    useEffect(() => {
      if (tripStatus === "findDriver") {
        const test = setTimeout(() => handleStatus("onTheWay"), 5000);
        return () => clearTimeout(test);
      } else {
        return;
      }
    }, [handleStatus]);

  if (tripStatus === "findDriver") {
    return (
      <Modal transparent={true}>
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="black" />
          <FontAwesomeIcon style={styles.car} size={50} icon={faCar} />
          <Text style={styles.searchTrip}>Looking for nearby drivers...</Text>
        </View>
      </Modal>
    );
  } else {
    return null;
  }
};

export default FindingDriver;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  searchTrip: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize:24
  },

  car: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});