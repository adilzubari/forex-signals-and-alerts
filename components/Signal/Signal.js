import React, { Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./Signal.style";

function Signal({ name, dateTime, open, type, status }) {
  return (
    <Fragment>
      <View style={styles.container}>
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

        <Text
          style={[styles.status, status == "Active" && styles.statusActive]}
        >
          {status}
        </Text>
      </View>
    </Fragment>
  );
}

export default Signal;
