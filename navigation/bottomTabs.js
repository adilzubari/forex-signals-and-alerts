import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Signals from "../pages/Signals/Signals";
import { useEffect } from "react";

const iconColor = "white";

const Tab = createBottomTabNavigator();

const RemoveAdsClick = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("focus", () => {
      navigation.navigate("HiddenSignalsTab");
      navigation.navigate("RemoveAds");
    });
  }, []);
  return <View style={styles.blackView}></View>;
};

const UpgradeClick = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("focus", () => {
      navigation.navigate("HiddenSignalsTab");
      navigation.navigate("Upgrade");
    });
  }, []);
  return <View style={styles.blackView}></View>;
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HiddenSignalsTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "rgb(50,50,50)",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="UpgradeBtn"
        component={UpgradeClick}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name="angle-double-right" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HiddenSignalsTab"
        component={Signals}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="VipSignalsBtn"
        component={UpgradeClick}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-checkmark-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RemoveAdsBtn"
        component={RemoveAdsClick}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="cross" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Temp() {
  return (
    <View style={styles.blackView}>
      <Text>.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blackView: {
    backgroundColor: "rgb(50,50,50)",
    flex: 1,
  },
});
