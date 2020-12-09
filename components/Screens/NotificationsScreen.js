import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import { DefaultContainer } from "../Styles/ContainerStyles";
import FollowRequestCard from "../cards/FollowRequestCard";

export default function NotificationsScreen() {
  const [search, setSearch] = useState([
    {
      key: "1",
      userName: "Ms. Sparkles",
      userWholeName: "Tanya Brown",
      userImg:
        "https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgyfHxwb3J0cmFpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      caption: "OMG Guys, I found an awesome cocktail bar in cologne! 🥂😍",
      location: "Cologne",
      locationName: "Seiberts",
      firstLiker: "Benham",
      likerNumber: 23,
      postImgSrc:
        "https://images.unsplash.com/photo-1606940077503-8cd3365e5cdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
      likerImg1:
        "https://images.unsplash.com/photo-1502980426475-b83966705988?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      likerImg2:
        "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=592&q=80",
      likerImg3:
        "https://images.unsplash.com/photo-1506468203959-a06c860af8f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    },
    {
      key: "2",
      userName: "Fritz Lakritz",
      userWholeName: "Jonas Loewe",
      userImg:
        "https://images.unsplash.com/photo-1502980426475-b83966705988?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80",
      caption:
        "Man, I love unwinding at this place and watching the cows do their thing. 😌",
      location: "Cologne",
      locationName: "Bauernhof",
      firstLiker: "Benham",
      likerNumber: "23",
      postImgSrc:
        "https://images.unsplash.com/photo-1582462458538-5a094f9f3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
        data={search}
        renderItem={({ item }) => (
          <FollowRequestCard
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
