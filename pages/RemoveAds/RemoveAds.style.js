import { StyleSheet } from "react-native";
import { wHeight, wWidth } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(50,50,50)",
    flex: 1,
  },
  p: {
    color: "rgb(0,0,80)",
    paddingHorizontal: wWidth * 0.05,
    textAlign: "center",
    paddingVertical: wHeight * 0.01,
    fontSize: wWidth * 0.035,
    lineHeight: wHeight * 0.02,
  },
  item: {
    backgroundColor: "rgb(80,80,80)",
    marginHorizontal: wWidth * 0.05,
    padding: wWidth * 0.05,
    borderRadius: wWidth * 0.02,
    marginBottom: wHeight * 0.01,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
  txt1: {
    color: "white",
    fontWeight: "bold",
    fontSize: wWidth * 0.04,
  },
  txt2: {
    color: "white",
    fontSize: wWidth * 0.035,
  },
  border: {
    width: 0,
    height: wHeight * 0.04,
    borderWidth: 2,
    borderColor: "white",
  },
});
