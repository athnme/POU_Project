import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchLevelOneStack from "./SearchLevelOneStack";

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchLevelOneStack}
        options={{
          title: "Search",
          headerTintColor: "#cecece",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 500,
          },
          headerStyle: {
            borderBottomColor: "rgba(0, 0, 0, 0)",
            backgroundColor: "#07211F",
          },
        }}
      />
    </Stack.Navigator>
  );
}
