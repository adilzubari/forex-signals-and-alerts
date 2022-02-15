import React, { Fragment } from "react";
import {
  BackHandler,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Upgrade.style";

function Upgrade({ navigation }) {
  const showToast = () =>
    ToastAndroid.show("Coming soon ...", ToastAndroid.SHORT);
  return (
    <View style={styles.container}>
      <Text style={styles.p}>
        Subscribe to access more (premium signals) that are not available to
        free users. By selecting a subscription package, you agree to our terms
        of service and privacy policy
      </Text>

      <View>
        <TouchableOpacity onPress={() => showToast()} style={styles.item}>
          <Text style={styles.txt1}>Weekly Subscription</Text>
          <View style={styles.border}></View>
          <Text style={styles.txt2}>$15/Week</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showToast()} style={styles.item}>
          <Text style={styles.txt1}>4 week Subscription</Text>
          <View style={styles.border}></View>
          <Text style={styles.txt2}>$50/4 Week</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showToast()} style={styles.item}>
          <Text style={styles.txt1}>3 Month Subscription</Text>
          <View style={styles.border}></View>
          <Text style={styles.txt2}>$130/3 Months</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showToast()} style={styles.item}>
          <Text style={styles.txt1}>6 Month Subscription</Text>
          <View style={styles.border}></View>
          <Text style={styles.txt2}>$230/6 Months</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showToast()} style={styles.item}>
          <Text style={styles.txt1}>Yearly Subscription</Text>
          <View style={styles.border}></View>
          <Text style={styles.txt2}>$300/Year</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Upgrade;
