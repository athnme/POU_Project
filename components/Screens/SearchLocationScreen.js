import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { DefaultContainer } from "../Styles/ContainerStyles";
import SearchLocationCard from "../cards/SearchLocationCard";
import { FlatList } from "react-native-gesture-handler";

const getCities = async () => {
  let uri = `http://localhost:5000/cities`;

  const response = await fetch(uri);
  const cities = await response.json();
  return cities;
};

export default function SearchLocationScreen() {
  const [cities, setCities] = useState(null);
  useEffect(() => {
    getCities().then((cities) => setCities(cities));
  }, []);
  if (!cities) {
    return <DefaultContainer />;
  }


  return (
    <DefaultContainer>
      <FlatList
        numColumns={60}
        columnWrapperStyle={styles.columnStyle}
        contentContainerStyle={styles.listContainer}
        data={cities}
        renderItem={({ item }) => (
          <SearchLocationCard locationName={item.name} postImgSrc={item.img} />
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
