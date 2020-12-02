import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AddButton } from "../Buttons";
import LikedScreen from "../Screens/LikedScreen";

const Stack = createStackNavigator();

export default function LikedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Liked Points"
        component={LikedScreen}
        options={{
          title: "Liked Points",
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
