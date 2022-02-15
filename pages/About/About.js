import React, { Fragment } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./About.style";

function About({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.p}>
        Forex signals and alerts app gives access to both free and premium
        signals to all its users. Free signals are available to all users;
        however, the app offers optional upgrades to clients who would like
        receive premium services like vip signals and removal of ads inside the
        app. The premium services are subscription based and they will
        automatically renew unless you decide to cancel anytime in the payment
        settings on your Google account. If you decide to cancel, you will
        continue receiving the premium services until the end of the payment
        period. By making the payment you acknowledge that your purchase is NON
        REFUNDABLE and you will access to the premium feature until the period
        you paid for expires.
      </Text>
    </ScrollView>
  );
}

export default About;
