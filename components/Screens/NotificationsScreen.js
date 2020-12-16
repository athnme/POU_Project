import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Post from "../cards/Post";
import { DefaultContainer } from "../Styles/ContainerStyles";

const getPosts = async (userId) => {
  let uri = `http://localhost:5000/users/${userId}/likes?_expand=post`;

  const response = await fetch(uri);
  const posts = await response.json();
  return posts;
};

export default function LikedScreen() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    getPosts(2).then((posts) => setPosts(posts));
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
            userName={item.post.userName}
            userImg={item.post.userImg}
            postImgSrc={item.post.postImg}
            caption={item.post.caption}
            locationName={item.post.locationName}
            location={item.post.location}
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
