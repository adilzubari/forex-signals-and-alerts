import React, { Fragment, useEffect, useState } from "react";
import {
  BackHandler,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import ReactNativeGalleryImage from "react-native-gallery-image";
import convertObjectToArray from "../../helpers/convertObjectToArray";
import { ImageGallery } from "@georstat/react-native-image-gallery";
import * as FacebookAds from "expo-ads-facebook";

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

  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  const [Images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("http://167.172.131.143/apis/getAllUploads.php")
      .then((rawResponse) => {
        setImages(
          convertObjectToArray(rawResponse.data)
            .filter((e) => typeof e === "string" && e.startsWith(sid))
            .map((e) => `http://167.172.131.143/uploads/${e}`)
        );
        console.log(
          convertObjectToArray(rawResponse.data)
            .filter((e) => typeof e === "string" && e.startsWith(sid))
            .map((e) => `http://167.172.131.143/uploads/${e}`)
        );
      });
  }, []);

  useEffect(() => {
    /** Get Signals Data */
    axios
      .get("http://167.172.131.143/apis/fetchAllSignals.php")
      .then((res) => {
        if (sid !== 1) {
          /** This navigation request is coming from within app click */
          /** lastUpdate Time */
          res = res.data.filter(({ id }) => id * 1 === sid * 1).pop();
          res.lastUpdate = res.lastUpdate.split("-").join("/") + " UTC+0000";
          res.lastUpdate =
            new Date(res.lastUpdate).toLocaleDateString() +
            " " +
            new Date(res.lastUpdate).toLocaleTimeString();
          /** Opening Time */
          res.openingTime = res.openingTime.split("-").join("/") + " UTC+0000";
          res.openingTime =
            new Date(res.openingTime).toLocaleDateString() +
            " " +
            new Date(res.openingTime).toLocaleTimeString();
          setDetails(res);
        } else if (sid === 1) {
          /** Notification clicked and it doesn't contain id, so we have to match other parameters */
          console.log(route.params);
          const {
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
            openingTime,
          } = route.params;
          res = res.data
            .filter(
              (e) =>
                title === e.title &&
                openPrice === e.openPrice &&
                action === e.action &&
                status === e.status &&
                takeProfit1 === e.takeProfit1 &&
                takeProfit2 === e.takeProfit2 &&
                takeProfit3 === e.takeProfit3 &&
                stopLoss === e.stopLoss &&
                profitLoss === e.profitLoss &&
                comments === e.comments &&
                type === e.type
            )
            .pop();

          res.lastUpdate = res.lastUpdate.split("-").join("/") + " UTC+0000";
          res.lastUpdate =
            new Date(res.lastUpdate).toLocaleDateString() +
            " " +
            new Date(res.lastUpdate).toLocaleTimeString();
          /** Opening Time */
          res.openingTime = res.openingTime.split("-").join("/") + " UTC+0000";
          res.openingTime =
            new Date(res.openingTime).toLocaleDateString() +
            " " +
            new Date(res.openingTime).toLocaleTimeString();
          setDetails(res);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(async () => {
    /** Handles Interstitial Ad */
    // await AdMobInterstitial.setAdUnitID(
    //   "ca-app-pub-6347096861709461/5873513327"
    // );
    await AdMobInterstitial.setAdUnitID(
      process.env.NODE_ENV === "development"
        ? "ca-app-pub-3940256099942544/1033173712"
        : "ca-app-pub-6347096861709461/5873513327"
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    // await AdMobInterstitial.showAdAsync();

    FacebookAds.InterstitialAdManager.showAd(
      `VID_HD_16_9_15S_APP_INSTALL#1552539725102158_1552541778435286`
    )
      .then((didClick) => {})
      .catch((error) => {
        console.log(error);
      });
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
      {!ShowLoader && Images && (
        <Fragment>
          <View style={styles.thumbsContainer}>
            <ReactNativeGalleryImage
              shouldFit={true}
              imagesEachRow={4}
              selectionColor="transparent"
              images={Images}
              onImagePress={(pressedImage) => openGallery()}
            />
          </View>
          <ImageGallery
            close={closeGallery}
            isOpen={isOpen}
            images={Images.map((e, i) => {
              return { id: i, url: e };
            })}
            renderHeaderComponent={() => {
              return (
                <TouchableOpacity onPress={closeGallery} style={styles.close}>
                  <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Fragment>
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
