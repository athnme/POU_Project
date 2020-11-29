import { StatusBar } from "expo-status-bar";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import HomeScreen from "./components/Screens/HomeScreen";
import LikedScreen from "./components/Screens/LikedScreen";
import CreateScreen from "./components/Screens/CreateScreen";
import NotificationsScreen from "./components/Screens/NotificationsScreen";
import YourProfileScreen from "./components/Screens/YourProfileScreen";

import {
  BackIcon,
  CloseIcon,
  HomeIcon,
  LikeIcon,
  IndicatorIcon,
  MarkUserIcon,
  NotificationIcon,
  OptionsIcon,
  SearchIcon,
  Wordmark,
  AddIcon,
  LogoIcon,
} from "./components/Icons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#33D17C"
          inactiveColor="#cecece"
          barStyle={{ backgroundColor: "#030D12" }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            tabBarIcon={HomeIcon}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Liked Points"
            component={LikedScreen}
            options={{
              tabBarLabel: "Liked Points",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Create Point"
            component={CreateScreen}
            options={{
              tabBarLabel: "Create Point",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="plus" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              tabBarLabel: "Notifications",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Your Profile"
            component={YourProfileScreen}
            options={{
              tabBarLabel: "Your Profile",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={24}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
