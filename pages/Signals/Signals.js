import React, { Fragment } from "react";
import { FlatList, View } from "react-native";
import Signal from "../../components/Signal/Signal";
import { styles } from "./Signals.style";

const signals = [
  {
    name: "AUD/JSD",
    dateTime: "2022-01-16 15:08:46",
    open: "123.12",
    vip: true,
    type: "Sell",
    status: "Active",
  },
  {
    name: "AUD/JSD",
    dateTime: "2022-01-16 15:08:46",
    open: "123.12",
    vip: false,
    type: "Buy",
    status: "Expired",
  },
];

function Signals() {
  return (
    <View style={styles.container}>
      <FlatList
        data={signals}
        renderItem={({ index, item }) => <Signal {...item} />}
      />
    </View>
  );
}

export default Signals;
