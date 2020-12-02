import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SearchProfileScreen from "../Screens/SearchProfileScreen";
import SearchLocationScreen from "../Screens/SearchLocationScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Profiles"
      tabBarOptions={{
        activeTintColor: "#33D17C",
        inactiveTintColor: "#cecece",

        indicatorStyle: {
          backgroundColor: "#33D17C",
          height: 1,
        },
        style: {
          backgroundColor: "#07211F",
        },
      }}
    >
      <Tab.Screen name="Profiles" component={SearchProfileScreen} />
      <Tab.Screen name="Locations" component={SearchLocationScreen} />
    </Tab.Navigator>
  );
}
