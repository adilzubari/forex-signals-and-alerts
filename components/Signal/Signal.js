import React, { Fragment } from "react";
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
  navigation,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() =>
        type === "Normal" && navigation.navigate("SignalDetail", { id })
      }
    >
      {type === "Vip" && <Image source={VipTag} style={styles.vip_tag} />}

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.dateTime}>{dateTime}</Text>
      </View>

      <View>
        <Text
          style={[
            styles.type,
            action == "Buy" ? styles.typeBuy : styles.typeSell,
          ]}
        >
          {action}
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
