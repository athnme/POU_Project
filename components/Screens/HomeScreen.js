import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Post from "../cards/Post";
import { DefaultContainer } from "../Styles/ContainerStyles";

export default function HomeScreen() {
  const [post, setPost] = useState([
    {
      key: "1",
      userName: "BurgerBurglar",
      userImg:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      caption: "Best burger in town, hands down!",
      location: "Cologne",
      locationName: "Freddie Schilling",
      firstLiker: "JustJo",
      likerNumber: "12",
      postImgSrc:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
      likerImg1:
        "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=592&q=80",
      likerImg2:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      likerImg3:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "2",
      userName: "Ms. Sparkles",
      userImg:
        "https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgyfHxwb3J0cmFpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      caption: "OMG Guys, I found an awesome cocktail bar in cologne! 🥂😍",
      location: "Cologne",
      locationName: "Seiberts",
      firstLiker: "Benham",
      likerNumber: "23",
      postImgSrc:
        "https://images.unsplash.com/photo-1553607558-455f4310f6ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=636&q=80",
      likerImg1:
        "https://images.unsplash.com/photo-1502980426475-b83966705988?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      likerImg2:
        "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=592&q=80",
      likerImg3:
        "https://images.unsplash.com/photo-1506468203959-a06c860af8f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    },
  ]);

  return (
    <DefaultContainer>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={post}
        renderItem={({ item }) => (
          <Post
            userName={item.userName}
            userImg={item.userImg}
            postImgSrc={item.postImgSrc}
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
    gap: 24,
    paddingVertical: 16,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
