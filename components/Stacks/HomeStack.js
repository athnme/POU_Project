import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";

import { Wordmark } from "../Icons";
import { AddButton, HeaderOptionsButton, OptionsButton } from "../Buttons";
import HomeScreen from "../Screens/HomeScreen";
import SearchStack from "./SearchStack";
import PostScreen from "../Screens/PostScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const HeaderBtn = styled(OptionsButton)`
  margin-right: 64px;
`;

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: Wordmark,
          headerTintColor: "#cecece",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 500,
          },
          headerStyle: {
            borderBottomColor: "rgba(0, 0, 0, 0)",
            backgroundColor: "#07211F",
          },
          headerRight: () => (
            <AddButton
              onPress={() => navigation.navigate(SearchStack)}
              title="Create New Point"
              color="#cecece"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerTitle: "Post",
          headerTintColor: "#cecece",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 500,
          },
          headerStyle: {
            borderBottomColor: "rgba(0, 0, 0, 0)",
            backgroundColor: "#07211F",
          },
          headerRight: () => (
            <HeaderOptionsButton
              onPress={() => navigation.navigate(SearchStack)}
              title="Options"
              color="#cecece"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          headerTintColor: "#cecece",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 500,
          },
          headerStyle: {
            borderBottomColor: "rgba(0, 0, 0, 0)",
            backgroundColor: "#07211F",
          },
          headerRight: () => (
            <HeaderOptionsButton
              onPress={() => navigation.navigate(SearchStack)}
              title="Options"
              color="#cecece"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
