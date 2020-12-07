import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";

import { DefaultContainer } from "../Styles/ContainerStyles";
import PostSmall from "../cards/PostSmall";

const PostList = styled.FlatList`
  padding: 16px 0;
  width: 100%;
`;

export default function YourProfileScreen() {
  const [post, setPost] = useState([
    {
      key: "1",
      postImgSrc:
        "https://images.unsplash.com/photo-1606940077503-8cd3365e5cdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
    },
    {
      key: "2",
      postImgSrc:
        "https://images.unsplash.com/photo-1582462458538-5a094f9f3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]);

  return (
    <DefaultContainer>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={post}
        renderItem={({ item }) => <PostSmall postImgSrc={item.postImgSrc} />}
      />
    </DefaultContainer>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    gap: 8,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
