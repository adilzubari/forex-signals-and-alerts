import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, Fragment, useRef, useState } from "react";
import { StyleSheet, Text, View, Alert, Platform } from "react-native";
import StackNavigation from "./navigation/stack";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import axios from "axios";
import * as InAppPurchases from "expo-in-app-purchases";
import * as Constants from "expo-constants";
import { AnimatedFlatList, AnimationType } from "flatlist-intro-animations";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb-8f5VpJPxjbMZt1EQG6t8VjQXk1iaq0",
  authDomain: "forex-signals-fa3d3.firebaseapp.com",
  projectId: "forex-signals-fa3d3",
  storageBucket: "forex-signals-fa3d3.appspot.com",
  messagingSenderId: "759888780291",
  appId: "1:759888780291:web:a044b189edd0d0a14fc236",
  measurementId: "G-LHYXT8D70T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const getExpoTokenFiltered = (token) =>
  token.split("[").pop().split("]").shift();

async function registerDeviceOnFirestore({ token }) {
  const usersRef = doc(db, "users", getExpoTokenFiltered(token));
  await setDoc(usersRef, { token, role: "guest" });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    await registerDeviceOnFirestore({ token });
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("global", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(async () => {
    console.log("Connecting to InAppPurchases", Constants.AppOwnership);

    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("notification", notification);
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("response", response);
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const [TokenThread, setTokenThread] = useState(false);
  useEffect(() => {
    if (TokenThread || expoPushToken === "") return;
    /** Get all push tokens from server */
    axios
      .get("http://167.172.131.143/apis/getAllTokens.php")
      .then((rawResponse) => {
        const FilteredToken = rawResponse.data
          .map(({ token }) => token)
          .filter((token) => token === expoPushToken);
        if (FilteredToken.length == 0) {
          /** Register Token */
          console.log("Registering uesr in database", expoPushToken);
          axios.get(
            `http://167.172.131.143/apis/registerUser.php?token=${encodeURI(
              expoPushToken
            )}`
          );
        }
      })
      .finally(() => {
        setTokenThread(true);
      });
  }, [expoPushToken]);

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
