import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./bottomTabs";
import { Fontisto } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Signals"
        component={BottomTabs}
        options={{
          headerStyle: {
            backgroundColor: "rgb(50,50,50)",
            elevation: 0,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => (
            <Fontisto
              name="bell-alt"
              size={24}
              color="white"
              style={{ marginRight: wWidth * 0.05 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
