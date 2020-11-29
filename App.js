import { StatusBar } from "expo-status-bar";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "./components/Screens/HomeScreen";
import LikedScreen from "./components/Screens/LikedScreen";
import CreateScreen from "./components/Screens/CreateScreen";
import NotificationsScreen from "./components/Screens/NotificationsScreen";
import YourProfileScreen from "./components/Screens/YourProfileScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Liked Points" component={LikedScreen} />
          <Tab.Screen name="Create Point" component={CreateScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="Your Profile" component={YourProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
