import React, { Fragment } from "react";
import { FlatList, View } from "react-native";
import Signal from "../../components/Signal/Signal";
import { styles } from "./Signals.style";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

const signals = [
  {
    name: "AUD/JSD",
    dateTime: "2022-01-16 15:08:46",
    open: "123.12",
    vip: true,
    type: "Sell",
    status: "Active",
  },
  {
    name: "AUD/JSD",
    dateTime: "2022-01-16 15:08:46",
    open: "123.12",
    vip: false,
    type: "Buy",
    status: "Expired",
  },
];

function Signals({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={signals}
        renderItem={({ index, item }) => (
          <Signal {...item} navigation={navigation} />
        )}
      />

      <AdMobBanner
        bannerSize="smartBannerLandscape"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        servePersonalizedAds // true or false
      />
    </View>
  );
}

export default Signals;
