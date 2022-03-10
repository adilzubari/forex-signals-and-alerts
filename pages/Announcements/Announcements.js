import React, { Fragment } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./Announcements.style";

function Announcements({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.no}>No announcements yet</Text>
    </View>
  );
}

export default Announcements;
