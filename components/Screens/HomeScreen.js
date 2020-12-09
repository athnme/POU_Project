import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { DefaultContainer } from "../Styles/ContainerStyles";
import Post from "../cards/Post";

const getPosts = async () => {
  let uri = `http://localhost:5000/posts?_expand=user`;

  const response = await fetch(uri);
  const posts = await response.json();
  return posts;
};

export default function HomeScreen() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);
  if (!posts) {
    return <DefaultContainer />;
  }
  return (
    <DefaultContainer>
      <FlatList
        numColumns={60}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnStyle}
        data={posts}
        renderItem={({ item }) => (
          <Post
            userName={item.user.userName}
            userImg={item.user.userImg}
            postImgSrc={item.postImg}
            caption={item.caption}
            locationName={item.locationName}
            location={item.location}
            likerImg1={item.likerImg1}
            likerImg2={item.likerImg2}
            likerImg3={item.likerImg3}
            firstLiker={item.firstLiker}
            likerNumber={item.likerNumber}
          />
        )}
      />
    </DefaultContainer>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
  },
  columnStyle: {
    gap: 24,
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
