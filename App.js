import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "./components/Screens/HomeScreen";
import LikedScreen from "./components/Screens/LikedScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Liked Points" component={LikedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
