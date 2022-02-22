import { Dimensions, StyleSheet } from "react-native";

const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(80,80,80)",
    marginHorizontal: wWidth * 0.05,
    padding: wWidth * 0.05,
    borderRadius: wWidth * 0.02,
    marginBottom: wHeight * 0.01,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  name: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  dateTime: {
    color: "rgb(200,200,200)",
    fontSize: wWidth * 0.03,
  },
  type: {
    fontSize: wWidth * 0.05,
    fontWeight: "bold",
    textAlign: "center",
  },
  typeBuy: {
    color: "rgb(0,160,0)",
  },
  typeSell: {
    color: "rgb(200,0,0)",
  },
  open: {
    color: "#cfc467",
    fontSize: wWidth * 0.03,
    textAlign: "center",
  },
  status: {
    color: "rgb(200,200,200)",
    fontSize: wWidth * 0.04,
    borderLeftWidth: 2,
    borderColor: "white",
    lineHeight: wHeight * 0.05,
    paddingLeft: wWidth * 0.05,
    width: wWidth * 0.22,
    textAlign: "center",
  },
  statusActive: {
    color: "rgb(0,160,0)",
  },
  vip_tag: {
    position: "absolute",
    width: wWidth * 0.1,
    height: wWidth * 0.1,
  },
});
