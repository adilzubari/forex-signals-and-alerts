import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import RemoveAds from "../pages/RemoveAds/RemoveAds";
import SignalDetail from "../pages/SignalDetail/SignalDetail";
import Announcements from "../pages/Announcements/Announcements";
import DrawerNavigation from "./drawer";
import { Ionicons } from "@expo/vector-icons";
import { wWidth } from "../constants";
import { NavigationContainer } from "@react-navigation/native";
import Upgrade from "../pages/Upgrade/Upgrade";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignalDetail"
        component={SignalDetail}
        options={{
          headerStyle: { backgroundColor: "rgb(50,50,50)", elevation: 0 },
          headerTintColor: "white",
          title: "Signal",
        }}
      />
      <Stack.Screen
        name="RemoveAds"
        component={RemoveAds}
        options={{
          headerStyle: { backgroundColor: "rgb(50,50,50)", elevation: 0 },
          headerTintColor: "white",
          title: "RemoveAds",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontStyle: "italic",
          },
        }}
      />
      <Stack.Screen
        name="Upgrade"
        component={Upgrade}
        options={{
          headerStyle: { backgroundColor: "rgb(50,50,50)", elevation: 0 },
          headerTintColor: "white",
          title: "Upgrade",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontStyle: "italic",
          },
        }}
      />
      <Stack.Screen
        name="Announcements"
        component={Announcements}
        options={{
          headerStyle: { backgroundColor: "rgb(50,50,50)", elevation: 0 },
          headerTintColor: "white",
          title: "Announcements",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontStyle: "italic",
          },
        }}
      />
    </Stack.Navigator>
  );
}
