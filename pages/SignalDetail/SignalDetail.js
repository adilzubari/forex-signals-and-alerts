import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./SignalDetail.style";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

function SignalDetail() {
  useEffect(async () => {
    await AdMobInterstitial.setAdUnitID(
      "ca-app-pub-3940256099942544/1033173712"
    ); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>USD-JYP</Text>
        <View style={styles.divider}></View>
        <TableView
          array={[
            ["Action", "Active"],
            ["Status", "Expired"],
            ["Opening Time", "2022-01-16 15:09:44"],
          ]}
        />
        <View style={styles.divider}></View>
        <TableView
          array={[
            ["Open Price", "123.6"],
            ["Take Profit 1", "123.6"],
            ["Take Profit 2", "123.6"],
            ["Take Profit 3", "123.6"],
          ]}
        />
        <View style={styles.divider}></View>
        <TableView
          array={[
            ["Stop Loss", "124.6"],
            ["Profit/Loss", "123.22"],
            ["Comment", "Stop Trading"],
            ["Last Update", "2022-01-16 15:09:44"],
          ]}
        />
      </View>
    </View>
  );
}

function TableView({ array }) {
  return (
    <FlatList
      data={array}
      renderItem={({ item }) => (
        <View style={styles.tr}>
          <Text style={styles.td}>{item[0]}</Text>
          <Text style={styles.td}>{item[1]}</Text>
        </View>
      )}
    />
  );
}

export default SignalDetail;
