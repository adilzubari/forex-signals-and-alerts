import React, { Fragment, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Signal from "../../components/Signal/Signal";
import { styles } from "./Signals.style";
import { AdMobBanner } from "expo-ads-admob";
import axios from "axios";
import * as Notifications from "expo-notifications";

// {
//   "0": "39",
//   "1": "XAU USD ",
//   "10": "",
//   "11": "2022-02-11 14:43:03",
//   "12": "2022-02-11 14:43:03",
//   "13": "Normal",
//   "2": "1800",
//   "3": "Buy",
//   "4": "Active",
//   "5": "1805",
//   "6": "1810",
//   "7": "OPEN",
//   "8": "1795",
//   "9": "",
//   "action": "Buy",
//   "comments": "",
//   "id": "39",
//   "lastUpdate": "2022-02-11 14:43:03",
//   "openPrice": "1800",
//   "openingTime": "2022-02-11 14:43:03",
//   "profitLoss": "",
//   "status": "Active",
//   "stopLoss": "1795",
//   "takeProfit1": "1805",
//   "takeProfit2": "1810",
//   "takeProfit3": "OPEN",
//   "title": "XAU USD ",
//   "type": "Normal",
// }

function Signals({ navigation }) {
  console.log(navigation.getState());
  const [signals, setSignals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [Refresh, setRefresh] = useState(true);

  const toggleResfresh = () => setRefresh(!Refresh);

  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  useEffect(() => {
    if (
      lastNotificationResponse &&
      lastNotificationResponse.notification.request.content.data["id"] &&
      lastNotificationResponse.actionIdentifier ===
        Notifications.DEFAULT_ACTION_IDENTIFIER
    ) {
      toggleResfresh();
      const {
        id,
        title,
        openPrice,
        action,
        status,
        takeProfit1,
        takeProfit2,
        takeProfit3,
        stopLoss,
        profitLoss,
        comments,
        type,
      } = lastNotificationResponse.notification.request.content.data;
      console.log(id);
      navigation.navigate("SignalDetail", {
        id,
        title,
        openPrice,
        action,
        status,
        takeProfit1,
        takeProfit2,
        takeProfit3,
        stopLoss,
        profitLoss,
        comments,
        type,
      });
    }
  }, [lastNotificationResponse]);

  useEffect(() => {
    setIsFetching(true);
    /** Get Signals from server */
    axios
      .get("http://167.172.131.143/apis/fetchAllSignals.php")
      .then((res) => {
        res = res.data.map(
          ({ id, title, lastUpdate, action, status, openPrice, type }) => {
            return {
              id,
              name: title,
              dateTime: lastUpdate,
              open: openPrice,
              vip: true,
              type,
              action,
              status,
            };
          }
        );
        setSignals(res);
      })
      .catch((error) => console.log(error));
    setIsFetching(false);
  }, [Refresh]);

  return (
    <View style={styles.container}>
      <FlatList
        data={signals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <Signal {...item} navigation={navigation} />
        )}
        onRefresh={toggleResfresh}
        refreshing={isFetching}
        progressViewOffset={100}
        // ListEmptyComponent={<Empty message="No data found." />}
      />

      <AdMobBanner
        bannerSize="smartBannerLandscape"
        adUnitID={
          process.env.NODE_ENV === "development"
            ? "ca-app-pub-3940256099942544/6300978111"
            : "ca-app-pub-6347096861709461/2512852815"
        }
        servePersonalizedAds // true or false
      />
    </View>
  );
}

export default Signals;
