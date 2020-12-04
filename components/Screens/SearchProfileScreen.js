import React from "react";
import styled from "styled-components/native";

import SearchProfileCard from "../cards/SearchProfileCard";

const DefaultScreen = styled.View`
  flex: 1;
  background-color: #07211f;
  background-image: linear-gradient(180deg, #07211f 3.28%, #030d12 96.74%);
  color: #cecece;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const DefaultText = styled.Text`
  color: inherit;
`;

const HeaderTwo = styled(DefaultText)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.25px;
`;

export default function SearchProfileScreen() {
  return (
    <DefaultScreen>
      <SearchProfileCard
        userName="Ms. Sparkles"
        userWholeName="Tanya Brown"
        userImg="https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgyfHxwb3J0cmFpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        caption="OMG Guys, I found an awesome cocktail bar in cologne! 🥂😍"
        location="Cologne"
        locationName="Seiberts"
        firstLiker="Benham"
        likerNumber="23"
        postImgSrc="https://images.unsplash.com/photo-1606940077503-8cd3365e5cdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
        likerImg1="https://images.unsplash.com/photo-1502980426475-b83966705988?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        likerImg2="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=592&q=80"
        likerImg3="https://images.unsplash.com/photo-1506468203959-a06c860af8f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
      />
    </DefaultScreen>
  );
}
