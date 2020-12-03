import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Wordmark } from "../Icons";
import { AddButton } from "../Buttons";
import HomeScreen from "../Screens/HomeScreen";
import SearchStack from "./SearchStack";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
