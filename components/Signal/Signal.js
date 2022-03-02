import React, { Fragment, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Signal.style";
import VipTag from "../../assets/vip_tag.png";

function Signal({
  id,
  name,
  dateTime,
  open,
  type,
  action,
  status,
  profitLoss,
  navigation,
}) {
  dateTime = dateTime.split("-").join("/") + " UTC+0000";
  dateTime =
    new Date(dateTime).toLocaleDateString() +
    " " +
    new Date(dateTime).toLocaleTimeString();

  // .split(" ");
  // dateTime.pop();
  // dateTime = dateTime.join(" ");
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() =>
        type === "Normal"
          ? navigation.navigate("SignalDetail", { id })
          : navigation.navigate("Upgrade", { id })
      }
    >
      {type === "Vip" && <Image source={VipTag} style={styles.vip_tag} />}

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.dateTime}>{dateTime}</Text>
      </View>

      <View>
        {type === "Normal" && (
          <Fragment>
            <Text
              style={[
                styles.type,
                action == "Buy" ? styles.typeBuy : styles.typeSell,
              ]}
            >
              {action}
            </Text>
            <Text style={styles.open}>{profitLoss}</Text>
          </Fragment>
        )}
      </View>

      <Text style={[styles.status, status == "Active" && styles.statusActive]}>
        {status}
      </Text>
    </TouchableOpacity>
  );
}

export default Signal;
