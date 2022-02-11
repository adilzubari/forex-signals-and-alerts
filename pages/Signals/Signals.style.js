import { Dimensions, StyleSheet } from "react-native";

const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(50,50,50)",
    flex: 1,
  },
});
