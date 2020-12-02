import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AddButton } from "../Buttons";
import NotificationsScreen from "../Screens/NotificationsScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: "Notifications",
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
              onPress={() => alert("This is a button!")}
              title="Search"
              color="#cecece"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
