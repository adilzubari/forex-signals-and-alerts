import React, { Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./Support.style";

function Support({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.p}>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at the email provided on our developer’s page
      </Text>
    </View>
  );
}

export default Support;
