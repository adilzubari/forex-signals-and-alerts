import { StyleSheet } from "react-native";
import { wHeight, wWidth } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(50,50,50)",
    flex: 1,
  },
  h: {
    color: "rgb(250,250,250)",
    paddingHorizontal: wWidth * 0.05,
    textAlign: "justify",
    paddingVertical: wHeight * 0.01,
    fontSize: wWidth * 0.055,
    lineHeight: wHeight * 0.03,
    // textDecorationLine: "underline",
    fontWeight: "bold",
  },
  p: {
    color: "rgb(230,230,230)",
    paddingHorizontal: wWidth * 0.05,
    textAlign: "justify",
    paddingVertical: wHeight * 0.01,
    fontSize: wWidth * 0.04,
    lineHeight: wHeight * 0.03,
  },
});
