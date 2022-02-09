import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigation from "./navigation/drawer";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <DrawerNavigation />
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
