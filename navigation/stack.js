import { createStackNavigator } from "@react-navigation/stack";
import SignalDetail from "../pages/SignalDetail/SignalDetail";
import DrawerNavigation from "./drawer";

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
    </Stack.Navigator>
  );
}
