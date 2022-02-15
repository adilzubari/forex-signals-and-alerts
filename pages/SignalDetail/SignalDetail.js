import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./SignalDetail.style";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

function SignalDetail({ route, navigation }) {
  const { id: sid } = route.params;
  const [Details, setDetails] = useState({
    action: "",
    comments: "",
    id: "",
    lastUpdate: "",
    openPrice: "",
    openingTime: "",
    profitLoss: "",
    status: "",
    stopLoss: "",
    takeProfit1: "",
    takeProfit2: "",
    takeProfit3: "",
    title: "Loading ...",
    type: "",
  });
  const [ShowLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    /** Get Signals Data */
    axios
      .get("http://167.172.131.143/apis/fetchAllSignals.php")
      .then((res) => {
        res = res.data.filter(({ id }) => id === sid).pop();
        setDetails(res);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(async () => {
    /** Handles Interstitial Ad */
    await AdMobInterstitial.setAdUnitID(
      process.env.NODE_ENV === "development"
        ? "ca-app-pub-3940256099942544/1033173712"
        : "ca-app-pub-6347096861709461/5873513327"
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{Details?.title}</Text>
        <View style={styles.divider}></View>
        <TableView
          array={[
            ["Action", `${Details?.action}`],
            ["Status", `${Details?.status}`],
            ["Opening Time", `${Details?.openingTime}`],
          ]}
        />
        <View style={styles.divider}></View>
        <TableView
          array={[
            ["Open Price", `${Details?.openPrice}`],
            ["Take Profit 1", `${Details?.takeProfit1}`],
            ["Take Profit 2", `${Details?.takeProfit2}`],
            ["Take Profit 3", `${Details?.takeProfit3}`],
          ]}
        />
        <View style={styles.divider}></View>
        <TableView
          array={[
            ["Stop Loss", `${Details?.stopLoss}`],
            ["Profit/Loss", `${Details?.profitLoss}`],
            ["Comment", `${Details?.comments}`],
            ["Last Update", `${Details?.lastUpdate}`],
          ]}
        />
      </View>

      <Text style={styles.resultsTitle}>Results</Text>
      {ShowLoader && Details && (
        <ActivityIndicator size="large" color="rgb(220,220,220)" />
      )}
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
