import React from "react";
import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import { LikeIcon, IndicatorIcon, OptionsIcon } from "../Icons";
import { HeaderSix, HeaderFive, HeaderFour } from "../Styles/Typography";
import { BtnIcon } from "../Styles/ButtonStyles";
import { ProfilePicL, ProfilePicS } from "../Styles/ProfilePicStyles";

const PointContainer = styled.View`
  width: clamp(248px, calc(100vw - 32px), 382px);
`;

const Point = styled.View`
  display: grid;
  grid-template-columns: 32px 32px 1fr;
  grid-template-rows: 32px 32px 1fr;
`;

const PointCard = styled.TouchableOpacity`
  border-radius: 16px;
  background-color: #042f2c;
  grid-column: 2 / 4;
  grid-row: 2 / 4;
`;

const PointImage = styled.Image`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
  height: calc(100vw - 64px);
  max-height: 280px;
  object-fit: cover;
`;

const PointInfo = styled.View`
  padding: 16px;
  gap: 16px;
`;

const PointInteractionContainer = styled.View`
  flex-direction: row;
  gap: 16px;
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

const LikersInfoContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const LikerPic = styled.View`
  margin-left: -12px;
`;

const UserPicContainer = styled.TouchableOpacity`
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

const LocationInfoContainer = styled.TouchableOpacity`
  grid-column: 1;
  grid-row: 3/4;
  padding-top: 16px;
  align-items: center;
  gap: 8px;
`;

const LocationTextContainer = styled.View`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  flex-direction: row;
  text-align: right;
`;

const LikerImg = styled(ProfilePicS)`
  border-color: #042f2c;
`;

export default function Post(props) {
  return (
    <PointContainer>
      <Point>
        <PointCard onPress={props.postScreen}>
          <PointImage source={props.postImgSrc} />
          <PointInfo>
            <HeaderFour>{props.caption} </HeaderFour>
            <PointInteractionContainer>
              <LikersContainer>
                <LikersPicsContainer>
                  <LikerPic>
                    <LikerImg source={props.likerImg1} />
                  </LikerPic>
                  <LikerPic>
                    <LikerImg source={props.likerImg2} />
                  </LikerPic>
                  <LikerPic>
                    <LikerImg source={props.likerImg3} />
                  </LikerPic>
                </LikersPicsContainer>
                <LikersInfoContainer>
                  <HeaderFive>{props.firstLiker} </HeaderFive>
                  <HeaderSix>
                    and {props.likerNumber} others liked this
                  </HeaderSix>
                </LikersInfoContainer>
              </LikersContainer>
              <BtnIcon onPress={props.postScreen}>
                <LikeIcon />
              </BtnIcon>
            </PointInteractionContainer>
          </PointInfo>
        </PointCard>
        <UserPicContainer onPress={props.profileScreen}>
          <ProfilePicL source={props.userImg} />
        </UserPicContainer>
        <UserNameOptionsContainer>
          <TouchableOpacity onPress={props.profileScreen}>
            <HeaderFive>{props.userName}</HeaderFive>
          </TouchableOpacity>
          <BtnIcon onPress={props.onPress}>
            <OptionsIcon />
          </BtnIcon>
        </UserNameOptionsContainer>
        <LocationInfoContainer onPress={props.postScreen}>
          <IndicatorIcon />
          <LocationTextContainer>
            <HeaderFive>{props.locationName}</HeaderFive>
            <HeaderSix>{props.location}</HeaderSix>
          </LocationTextContainer>
        </LocationInfoContainer>
      </Point>
    </PointContainer>
  );
}
