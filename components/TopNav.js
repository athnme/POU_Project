import React from "react";
import { Button } from "react-native";

export default function TopNav() {
  return (
    <Button title="Search" onPress={() => navigation.navigate("Search")} />
  );
}
