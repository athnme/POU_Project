import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./Stacks/HomeStack";
import LikedStack from "./Stacks/LikedStack";
import SearchStack from "./Stacks/SearchStack";
import NotificationStack from "./Stacks/NotificationStack";
import YourProfileStack from "./Stacks/YourProfileStack";

import {
  HomeIcon,
  HomeIcon_Active,
  LikeIcon,
  LikeIcon_Active,
  NotificationIcon,
  NotificationIcon_Active,
  SearchIcon,
  SearchIcon_Active,
} from "./Icons";

import { ProfilePicS, ProfilePicS_Active } from "./ProfilePics";

const Tab = createMaterialBottomTabNavigator();

//

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Notifications"
        activeColor="#33D17C"
        inactiveColor="#cecece"
        shifting="true"
        labeled="true"
        barStyle={{ backgroundColor: "#030D12", height: 56 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? <HomeIcon_Active /> : <HomeIcon />,
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ focused }) =>
              focused ? <SearchIcon_Active /> : <SearchIcon />,
          }}
        />
        <Tab.Screen
          name="Liked Points"
          component={LikedStack}
          options={{
            tabBarLabel: "Liked Points",
            tabBarIcon: ({ focused }) =>
              focused ? <LikeIcon_Active /> : <LikeIcon />,
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationStack}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ focused }) =>
              focused ? <NotificationIcon_Active /> : <NotificationIcon />,
          }}
        />
        <Tab.Screen
          name="Your Profile"
          component={YourProfileStack}
          options={{
            tabBarLabel: "Your Profile",
            tabBarIcon: ({ focused }) =>
              focused ? <ProfilePicS_Active /> : <ProfilePicS />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
