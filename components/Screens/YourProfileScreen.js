import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { DefaultContainer } from "../Styles/ContainerStyles";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import PostSmall from "../cards/PostSmall";

const pageData = {
  useriD: "001abc",
  userName: "Ms. Sparkles",
  userImg:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  wholeName: "Tanya Brown",
  message: "this is the profile message",
  followerCount: "12",
  followingCount: "52",
  posts: [
    {
      id: "001",
      postImg:
        "https://images.unsplash.com/photo-1606940077503-8cd3365e5cdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
      caption: "this is the post caption",
      locationName: "Seiberts",
      coordinates: "50.93892363027569, 6.940656269549393",
      creationDate: "201208",
      creationTime: "1540",
    },
    {
      id: "002",
      postImg:
        "https://images.unsplash.com/photo-1582462458538-5a094f9f3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "this is the post caption 2",
      locationName: "Pure White",
      coordinates: "50.93892363027569, 6.940656269549393",
      creationDate: "201208",
      creationTime: "1540",
    },
  ],
};

function listHeader() {
  return (
    <ProfileInfoCard
      wholeName={pageData.wholeName}
      userImg={pageData.userImg}
      message={pageData.message}
      pointCount={pageData.posts.length}
      followerCount={pageData.followerCount}
      followingCount={pageData.followingCount}
    />
  );
}

export default function YourProfileScreen() {
  return (
    <DefaultContainer>
      <FlatList
        numColumns={60}
        columnWrapperStyle={styles.columnStyle}
        ListHeaderComponent={listHeader}
        contentContainerStyle={styles.listContainer}
        data={pageData.posts}
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
