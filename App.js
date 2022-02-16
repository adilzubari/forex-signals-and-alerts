import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, Fragment, useRef, useState } from "react";
import { StyleSheet, Text, View, Alert, Platform } from "react-native";
import StackNavigation from "./navigation/stack";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const registerForPushNotificationsAsync = async () => {
  let token;
  // if (Constants.isDevice) {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted" || Platform.OS === "android") {
    const { status } = await Notifications.requestPermissionsAsync();

    finalStatus = status;
  }
  if (finalStatus !== "granted") return;

  token = (await Notifications.getExpoPushTokenAsync()).data;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("global", {
      name: "global",
      importance: Notifications.AndroidImportance.MAX,
      // vibrationPattern: [0, 250, 250, 250],
      // lightColor: "#FF231F7C",
    });
  }

  return token;
};

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(async () => {
    let token;
    // if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted" || Platform.OS === "android") {
      const { status } = await Notifications.requestPermissionsAsync();

      finalStatus = status;
    }
    if (finalStatus !== "granted") return;

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    setExpoPushToken(token);

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("global", {
        name: "global",
        // importance: Notifications.AndroidImportance.MAX,
        // vibrationPattern: [0, 250, 250, 250],
        // lightColor: "#FF231F7C",
      });
      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
          console.log(notification);
        });

      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });

      return () => {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }
  }, []);

  return (
    <Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
