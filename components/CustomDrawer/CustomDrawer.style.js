import { Dimensions, StyleSheet } from "react-native";

const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(80,80,80)",
    flex: 1,
    paddingVertical: wHeight * 0.1,
    alignItems: "center",
  },
  option: {
    color: "rgb(240,240,240)",
    width: wWidth * 0.7,
    marginVertical: wHeight * 0.005,
    paddingVertical: wHeight * 0.015,
    paddingHorizontal: wWidth * 0.03,
    borderRadius: wWidth * 0.01,
    fontSize: wWidth * 0.04,
  },
  optionActive: {
    backgroundColor: "rgba(230,230,230,.2)",
  },
});
