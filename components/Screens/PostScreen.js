import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { LikeIcon, IndicatorIcon, MarkUserIcon } from "../Icons";

import { DefaultContainer } from "../Styles/ContainerStyles";
import { ProfilePicL, ProfilePicS } from "../Styles/ProfilePicStyles";
import {
  HeaderFour,
  HeaderFive,
  HeaderSix,
  BtnTextCta,
} from "../Styles/Typography";
import { BtnCta, BtnIcon } from "../Styles/ButtonStyles";

const DefaultScrollView = styled.ScrollView`
  background-color: #07211f;
  background-image: linear-gradient(180deg, #07211f 3.28%, #030d12 96.74%);
`;

const PostInfoContainer = styled.View`
  width: 100%;
  padding: 0 16px;
  margin-top: -32px;
  justify-content: center;
  gap: 16px;
`;

const ProfileLocationContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;

const NameLocation = styled.View`
  justify-content: space-around;
`;

const LocationContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-left: -8px;
`;

const PostImg = styled.Image`
  width: 100%;
  height: calc(100vw / 5 * 4);
`;

const LikeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BtnsContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;

const Likers = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const LikersPics = styled.View`
  flex-direction: row;
  padding-left: 8px;
`;

const LikerPic = styled(ProfilePicS)`
  margin-left: -8px;
  border-color: #030d12;
`;

const LocationMapContainer = styled.View`
  width: 100%;
  gap: 16px;
  padding-bottom: 16px;
`;

const MapContainer = styled.View`
  width: 100%;
  height: calc(100vw / 5 * 4);
  background-color: black;
  border-radius: 16px;
`;

const LocationInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function PostScreen({ route, navigation }) {
  const getPost = async () => {
    const { id } = route.params;
    let uri = `http://localhost:5000/posts/${id}?_expand=user`;

    const response = await fetch(uri);
    const post = await response.json();
    return post;
  };

  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost().then((post) => setPost(post));
  }, []);
  if (!post) {
    return <DefaultContainer />;
  }
  return (
    <DefaultScrollView>
      <PostImg source={post.postImg} />
      <PostInfoContainer>
        <ProfileLocationContainer>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { id: item.user.id })}
          >
            <ProfilePicL source={post.user.userImg} />
          </TouchableOpacity>
          <NameLocation>
            <TouchableOpacity>
              <HeaderFive>{post.user.userName}</HeaderFive>
            </TouchableOpacity>
            <LocationContainer>
              <IndicatorIcon />
              <HeaderSix>{post.location}</HeaderSix>
            </LocationContainer>
          </NameLocation>
        </ProfileLocationContainer>
        <HeaderFour>{post.caption}</HeaderFour>
        <LikeContainer>
          <Likers>
            <LikersPics>
              <LikerPic source={post.user.userImg} />
              <LikerPic source={post.user.userImg} />
              <LikerPic source={post.user.userImg} />
            </LikersPics>
            <HeaderSix>
              <HeaderFive>{post.user.userName}</HeaderFive> and{" "}
              <HeaderFive>{post.user.userName.length} others </HeaderFive>
              liked this
            </HeaderSix>
          </Likers>
          <BtnsContainer>
            <BtnIcon>
              <LikeIcon />
            </BtnIcon>
            <BtnIcon>
              <MarkUserIcon />
            </BtnIcon>
          </BtnsContainer>
        </LikeContainer>
        <LocationMapContainer>
          <MapContainer></MapContainer>
          <LocationInfoContainer>
            <HeaderSix>
              Friesenwall 33
              <br />
              50672 Cologne
            </HeaderSix>
            <BtnCta>
              <BtnTextCta>lead to point</BtnTextCta>
            </BtnCta>
          </LocationInfoContainer>
        </LocationMapContainer>
      </PostInfoContainer>
    </DefaultScrollView>
  );
}
