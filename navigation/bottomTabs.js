import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Signals from "../pages/Signals/Signals";

const iconColor = "white";

const Tab = createBottomTabNavigator();

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
        name="Upgrade"
        component={Temp}
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
        name="VipSignals"
        component={Temp}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-checkmark-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RemoveAds"
        component={Temp}
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
