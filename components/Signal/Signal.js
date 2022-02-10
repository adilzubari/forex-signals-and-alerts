import React, { Fragment } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Signal.style";

function Signal({ name, dateTime, open, type, status, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate("SignalDetail")}
    >
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.dateTime}>{dateTime}</Text>
      </View>

      <View>
        <Text
          style={[
            styles.type,
            type == "Buy" ? styles.typeBuy : styles.typeSell,
          ]}
        >
          {type}
        </Text>
        <Text style={styles.open}>{open}</Text>
      </View>

      <Text style={[styles.status, status == "Active" && styles.statusActive]}>
        {status}
      </Text>
    </TouchableOpacity>
  );
}

export default Signal;
