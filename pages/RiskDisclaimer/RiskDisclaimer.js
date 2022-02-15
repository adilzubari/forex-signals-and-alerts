import React, { Fragment } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./RiskDisclaimer.style";

function RiskDisclainer({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.p}>
        Forex, Futures and options trading has a large potential rewards but
        equally a large potential risk. Trading foreign exchange on margin
        carries a high level of risk and may not be suitable for all investors.
        You must be aware of the risks involved in this kind of business and be
        willing to invest in this kind of investment. This app and the content
        contained in this app is not is neither a solicitation nor an offer to
        participate in trading forex markets, futures or options.
      </Text>
      <Text style={styles.p}>
        This app and the content contained here is supposed to be used for
        educational purposes only. We do not provide any financial advice
        whatsoever, and You are required to use the information and do your own
        analysis before deciding to place a trade in any trading platform. The
        past performance of previous signals/content does not guarantee future
        success. Forex signals app bears no responsibility for any decisions
        taken by the user and they bear full responsibility of the actions that
        they take.
      </Text>
      <Text style={styles.p}>
        While the signal provider of this app has done their best efforts of
        provide accurate content, they make no warranties on the outcome of
        using it. We don’t guarantee any future success and neither the content
        provider nor the app shall be liable for any losses occurred using the
        information provided in this app. Do not trade with money you can’t
        afford to loose.
      </Text>
      <Text style={styles.p}>
        While using this site, you explicitly agree that you will use the
        content at your own risk and you solely bear all the risks involved from
        the use of this app. If you don’t agree or prohibited by your
        jurisdictions with any of the mentioned disclaimers you are prohibited
        to use this app.
      </Text>
      <Text style={styles.p}></Text>
    </ScrollView>
  );
}

export default RiskDisclainer;
