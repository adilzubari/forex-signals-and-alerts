import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CustomDrawer.style";

function CustomDrawer({ state, navigation, descriptors }) {
  console.log(state);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("HiddenSignalsTab")}
      >
        <Text style={[styles.option]}>Signals</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[styles.option, styles.optionActive]}>
          Risk Disclaimer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[styles.option]}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[styles.option]}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[styles.option]}>Disclaimer</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomDrawer;
