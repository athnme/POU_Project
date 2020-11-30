import React from "react";
import { Button } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./Screens/HomeScreen";
import LikedScreen from "./Screens/LikedScreen";
import CreateScreen from "./Screens/CreateScreen";
import NotificationsScreen from "./Screens/NotificationsScreen";
import YourProfileScreen from "./Screens/YourProfileScreen";
import SearchScreen from "./Screens/SearchScreen";

import {
  HomeIcon,
  HomeIcon_Active,
  LikeIcon,
  LikeIcon_Active,
  NotificationIcon,
  NotificationIcon_Active,
  AddIcon,
  Wordmark,
} from "./Icons";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

function LikedStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Liked" component={LikedScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

//

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: Wordmark,
          headerStyle: {
            backgroundColor: "#07211F",
          },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="kkkkkkkkkkkkkkkkkkkkkkkkkk"
              color="#cecece"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#33D17C"
        inactiveColor="#cecece"
        shifting="true"
        labeled="true"
        barStyle={{ backgroundColor: "#030D12" }}
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
          name="Liked Points"
          component={LikedStackScreen}
          options={{
            tabBarLabel: "Liked Points",
            tabBarIcon: ({ focused }) =>
              focused ? <LikeIcon_Active /> : <LikeIcon />,
          }}
        />
        <Tab.Screen
          name="Create Point"
          component={CreateScreen}
          options={{
            tabBarLabel: "Create Point",
            tabBarIcon: ({ focused }) => (focused ? <AddIcon /> : <AddIcon />),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ focused }) =>
              focused ? <NotificationIcon_Active /> : <NotificationIcon />,
          }}
        />
        <Tab.Screen
          name="Your Profile"
          component={YourProfileScreen}
          options={{
            tabBarLabel: "Your Profile",
            tabBarIcon: ({ focused }) =>
              focused ? <HomeIcon /> : <LikeIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
