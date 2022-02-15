import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CustomDrawer.style";

const DrawerRoutes = [
  {
    routeName: "HiddenSignalsTab",
    label: "Signals",
  },
  {
    routeName: "RiskDisclaimer",
    label: "Risk Disclaimer",
  },
  {
    routeName: "About",
    label: "Terms & Conditions",
  },
  {
    routeName: "PrivacyPolicy",
    label: "Privacy Policy",
  },
  {
    routeName: "Support",
    label: "Support",
  },
];

function CustomDrawer(props) {
  const { state, navigation, descriptors } = props;
  const { index, routes, routeNames } = state;
  const activeRouteName = routeNames[index];

  const handleNavigate = (routeName) => {
    console.log(navigation.getState());
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DrawerRoutes}
        renderItem={({ item: { routeName, label } }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleNavigate(routeName)}
          >
            <Text
              style={[
                styles.option,
                activeRouteName === routeName ? styles.optionActive : "",
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default CustomDrawer;
