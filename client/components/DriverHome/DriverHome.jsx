import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import RiderList from "./RiderList.jsx";
import Map from "./Map.jsx";
import DriverPickup from "./DriverPickup.jsx";
import DriverArrived from "./DriverArrived.jsx";
import OnTheWay from "./OnTheWay.jsx";
import * as Location from "expo-location";

const DriverHome = () => {
  const [rider, setRider] = useState({});
  const [dollarAmount, setDollarAmount] = useState("");
  const [miles, setMiles] = useState("");
  const [isRiderListVisible, setIsRiderListVisible] = useState(true);
  const [status, setStatus] = useState("rideList");
  const [driverLocation, setDriverLocation] = useState({
    latitude: 70.6414929,
    longitude: -73.9927213,
  });

  const changeRider = (rider) => {
    setRider(rider);
    setStatus("pickup");
  };

  const onTheWay = () => {
    setStatus("onTheWay");
  };

  const ArrivedToDestination = () => {
    setStatus("arrived");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let { coords } = await Location.getCurrentPositionAsync({});
      setDriverLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    })();
  }, [setDriverLocation]);

  return (
    <>
      <Map destination={rider.location} driverLocation={driverLocation} />
      {status === "rideList" && <RiderList changeRider={changeRider} />}
      {status === "pickup" && (
        <DriverPickup rider={rider} onTheWay={onTheWay} />
      )}
      {status === "onTheWay" && (
        <OnTheWay rider={rider} ArrivedToDestination={ArrivedToDestination} />
      )}
      {status === "arrived" && <DriverArrived rider={rider} />}
    </>
  );
};

const styles = StyleSheet.create({
  mapView: {
    flex: 5,
  },
  driverPick: {
    flex: 1,
  },
});

export default DriverHome;
