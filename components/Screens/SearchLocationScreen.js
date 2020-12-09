import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { DefaultContainer } from "../Styles/ContainerStyles";
import SearchLocationCard from "../cards/SearchLocationCard";
import { FlatList } from "react-native-gesture-handler";

export default function SearchLocationScreen() {
  const [search, setSearch] = useState([
    {
      key: "1",
      location: "Cologne",
      postImgSrc:
        "https://images.unsplash.com/photo-1606940077503-8cd3365e5cdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
    },
    {
      key: "2",
      location: "Cologne",
      postImgSrc:
        "https://images.unsplash.com/photo-1582462458538-5a094f9f3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]);

  return (
    <DefaultContainer>
      <FlatList
        numColumns={60}
        columnWrapperStyle={styles.columnStyle}
        contentContainerStyle={styles.listContainer}
        data={search}
        renderItem={({ item }) => (
          <SearchLocationCard
            locationName={item.location}
            postImgSrc={item.postImgSrc}
          />
        )}
      />
    </DefaultContainer>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    gap: 8,
    paddingVertical: 8,
  },
  columnStyle: {
    gap: 8,
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
