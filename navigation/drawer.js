import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./bottomTabs";
import { Fontisto } from "@expo/vector-icons";
import { Dimensions, Text, View } from "react-native";
/** Bindings */
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import RiskDisclaimer from "../pages/RiskDisclaimer/RiskDisclaimer";
import About from "../pages/About/About";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Support from "../pages/Support/Support";

const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;
const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ stackNavigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ route, navigation: { navigate } }) => {
        return {
          headerStyle: {
            backgroundColor: "rgb(50,50,50)",
            elevation: 0,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => {
            return (
              <Fontisto
                name="bell-alt"
                size={24}
                color="white"
                style={{ marginRight: wWidth * 0.05 }}
                onPress={() => navigate("Announcements")}
              />
            );
          },
        };
      }}
    >
      <Drawer.Screen name="Signals" component={BottomTabs} />
      <Drawer.Screen
        name="RiskDisclaimer"
        component={RiskDisclaimer}
        options={{ headerTitle: "Risk Disclaimer" }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ headerTitle: "Terms & Conditions" }}
      />
      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerTitle: "Privacy Policy" }}
      />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  );
}
