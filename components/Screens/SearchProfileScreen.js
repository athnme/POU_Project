import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import { DefaultContainer } from "../Styles/ContainerStyles";
import SearchProfileCard from "../cards/SearchProfileCard";

const getUsers = async () => {
  let uri = `http://localhost:5000/users`;

  const response = await fetch(uri);
  const users = await response.json();
  return users;
};

export default function SearchProfileScreen() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);
  if (!users) {
    return <DefaultContainer />;
  }

  return (
    <DefaultContainer>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={users}
        renderItem={({ item }) => (
          <SearchProfileCard
            userName={item.userName}
            userWholeName={item.userWholeName}
            userImg={item.userImg}
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
});
