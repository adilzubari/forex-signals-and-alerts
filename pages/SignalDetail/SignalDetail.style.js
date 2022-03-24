import { Dimensions, StyleSheet } from "react-native";

const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(50,50,50)",
    flex: 1,
  },
  detailContainer: {
    backgroundColor: "rgb(80,80,80)",
    marginHorizontal: wWidth * 0.05,
    padding: wWidth * 0.05,
    borderRadius: wWidth * 0.02,
    marginBottom: wHeight * 0.01,
    flexDirection: "row",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: wWidth * 0.05,
    fontWeight: "700",
    marginBottom: wHeight * 0.01,
  },
  divider: {
    width: "86%",
    borderWidth: 1,
    borderColor: "rgb(100,100,100)",
    marginVertical: wHeight * 0.01,
    borderRadius: wWidth * 0.1,
  },
  tr: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wWidth * 0.75,
    marginVertical: wHeight * 0.005,
  },
  td: {
    color: "rgb(230,230,230)",
    fontSize: wWidth * 0.04,
  },
  resultsTitle: {
    color: "rgb(230,230,230)",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: wWidth * 0.06,
    marginVertical: wHeight * 0.03,
  },
  thumbsContainer: {
    width: wWidth * 0.9,
    marginHorizontal: wWidth * 0.05,
  },
  close: {
    width: wWidth * 0.24,
    marginLeft: wWidth * 0.37,
    marginTop: wHeight * 0.03,
    // marginHorizontal: wWidth * 0.05,
    backgroundColor: "rgba(250,250,250,.4)",
    textAlign: "center",
    paddingVertical: wHeight * 0.01,
    borderRadius: wHeight * 0.01,
  },
  closeText: {
    textAlign: "center",
  },
});
