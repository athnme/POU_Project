import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { ProfilePicL, ProfilePicS } from "../../ProfilePics";
import { IndicatorIcon } from "../../Icons";

import { OptionsButton, LikeButton } from "../../Buttons";

const PointContainer = styled.View`
  padding: 12px 16px;
`;

const Point = styled.View`
  display: grid;
  grid-template-columns: 32px 32px 1fr;
  grid-template-rows: 32px 32px 1fr;
`;

const PointCard = styled.View`
  border-radius: 16px;
  background-color: #042f2c;
  grid-column: 2 / 4;
  grid-row: 2 / 4;
`;

const PointImage = styled.Image`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

const PointInfo = styled.View`
  padding: 16px;
  gap: 16px;
`;

const PointTitle = styled.Text`
  color: #cecece;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25;
`;

const PointInteractionContainer = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

const LikersContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;

const LikersPicsContainer = styled.View`
  flex-direction: row;
  padding-left: 12px;
`;

const LikerPic = styled.View`
  margin-left: -12px;
`;

const UserPicContainer = styled.View`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

const UserNameOptionsContainer = styled.View`
  grid-column: 3/4;
  grid-row: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
`;

const LocationInfoContainer = styled.View`
  grid-column: 1;
  grid-row: 3/4;
  padding-top: 16px;
  align-items: center;
  gap: 8px;
`;

const LocationTextContainer = styled.View`
  transform: rotate(180deg);
`;

const LocationText = styled.Text`
  text-align: right;
  writing-mode: vertical-rl;
  color: #cecece;
`;

const LocationTextBold = styled(LocationText)`
  font-weight: 700;
`;

export default function Post() {
  return (
    <PointContainer>
      <Point>
        <PointCard>
          <PointImage source={require("../../../assets/postpic/postpic.jpg")} />
          <PointInfo>
            <PointTitle>
              OMG Guys, I found an awesome cocktail bar in cologne! 🥂😍
            </PointTitle>
            <PointInteractionContainer>
              <LikersContainer>
                <LikersPicsContainer>
                  <LikerPic>
                    <ProfilePicS />
                  </LikerPic>
                  <LikerPic>
                    <ProfilePicS />
                  </LikerPic>
                  <LikerPic>
                    <ProfilePicS />
                  </LikerPic>
                </LikersPicsContainer>
                <Text>Hello</Text>
              </LikersContainer>
              <LikeButton />
            </PointInteractionContainer>
          </PointInfo>
        </PointCard>
        <UserPicContainer>
          <ProfilePicL />
        </UserPicContainer>
        <UserNameOptionsContainer>
          <Text>Hello</Text>
          <OptionsButton />
        </UserNameOptionsContainer>
        <LocationInfoContainer>
          <IndicatorIcon />
          <LocationTextContainer>
            <LocationTextBold>HELLO </LocationTextBold>
            <LocationText>HELLO</LocationText>
          </LocationTextContainer>
        </LocationInfoContainer>
      </Point>
    </PointContainer>
  );
}
