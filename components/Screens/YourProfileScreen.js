import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import { DefaultContainer } from "../Styles/ContainerStyles";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import PostSmall from "../cards/PostSmall";

const getUser = async () => {
  let uri = `http://localhost:5000/users/2?_embed=posts`;

  const response = await fetch(uri);
  const user = await response.json();
  return user;
};


export default function YourProfileScreen() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);
  if (!user) {
    return <DefaultContainer />;
  }

  return (
    <DefaultContainer>
      <FlatList
        numColumns={60}
        columnWrapperStyle={styles.columnStyle}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <ProfileInfoCard
            wholeName={user.wholeName}
            userImg={user.userImg}
            message={user.message}
            pointCount={user.posts.length}
            followerCount={user.posts.length}
            followingCount={user.posts.length}
          />
        }

        data={user.posts}
        renderItem={({ item }) => <PostSmall postImgSrc={item.postImg} />}
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
