import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SearchProfileScreen from "../Screens/SearchProfileScreen";
import SearchLocationScreen from "../Screens/SearchLocationScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profiles" component={SearchProfileScreen} />
      <Tab.Screen name="Locations" component={SearchLocationScreen} />
    </Tab.Navigator>
  );
}
