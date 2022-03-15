import React, { Fragment, useEffect, useState } from "react";
import { FlatList, View, Animated } from "react-native";
import Signal from "../../components/Signal/Signal";
import { styles } from "./Signals.style";
import { AdMobBanner } from "expo-ads-admob";
import axios from "axios";
import * as Notifications from "expo-notifications";
import { FadeInFlatList } from "@ja-ka/react-native-fade-in-flatlist";
import { AnimatedFlatList, AnimationType } from "flatlist-intro-animations";
import { MagicFlatList } from "react-native-magic-list";

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

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  useEffect(() => {
    if (
      lastNotificationResponse &&
      lastNotificationResponse.notification.request.content.data["id"] &&
      lastNotificationResponse.notification.request.content.data["type"] ===
        "Normal" &&
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
        openingTime,
        comments,
        type,
      } = lastNotificationResponse.notification.request.content.data;
      // console.log(id);
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
        openingTime,
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
          ({
            id,
            title,
            lastUpdate,
            action,
            status,
            openPrice,
            type,
            profitLoss,
          }) => {
            return {
              id,
              name: title,
              dateTime: lastUpdate,
              open: openPrice,
              vip: true,
              type,
              action,
              status,
              profitLoss,
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
      {/* <MagicFlatList
        animateType="floatFromBottom"
        data={signals}
        renderItem={({ item }) => <Signal {...item} navigation={navigation} />}
        onRefresh={toggleResfresh}
        refreshing={isFetching}
      /> */}
      <AnimatedFlatList
        data={signals}
        renderItem={({ item }) => <Signal {...item} navigation={navigation} />}
        animationType={AnimationType.Dive}
        animationDuration={1000}
        // focused={focused}
        onRefresh={toggleResfresh}
        refreshing={isFetching}
      />
      {/* <FadeInFlatList
        initialDelay={0}
        durationPerItem={200}
        parallelItems={2}
        itemsToFadeIn={10}
        data={signals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <Signal {...item} navigation={navigation} />
        )}
        onRefresh={toggleResfresh}
        refreshing={isFetching}
        progressViewOffset={10}
      /> */}
      {/* <VegaScrollList
        distanceBetweenItem={12}
        refreshing={isFetching}
        onRefresh={toggleResfresh}
        data={signals}
        renderItem={({ item }) => {
          return <Signal {...item} navigation={navigation} />;
        }}
      ></VegaScrollList> */}
      {/* <FlatList
        refreshing={isFetching}
        onRefresh={toggleResfresh}
        scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        data={signals}
        renderItem={({ item }) => {
          return <Signal {...item} navigation={navigation} />;
        }}
      /> */}

      <AdMobBanner
        bannerSize="smartBannerLandscape"
        // adUnitID={"ca-app-pub-6347096861709461/2512852815"}
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
