import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { OptionsButton } from "../Buttons";
import PostScreen from "../Screens/Post";

const Stack = createStackNavigator();

export default function PostStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: "Post",
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
            <OptionsButton
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
