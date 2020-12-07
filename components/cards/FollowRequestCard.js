import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { HeaderSix, HeaderFive } from "../Styles/Typography";
import { ProfilePicM } from "../Styles/ProfilePicStyles";
import { BtnDefault, BtnCta } from "../Styles/ButtonStyles";
import { BtnTextDefault, BtnTextCta } from "../Styles/Typography";

const CardContainer = styled.View`
  background-color: #042f2c;
  padding: 16px;
  border-radius: 16px;
  gap: 16px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const UserInfoContainer = styled.View`
  gap: 16px;
  align-items: center;
  flex-direction: row;
`;

const NameContainer = styled.View`
  flex-direction: row;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export default function SearchProfileCard(props) {
  return (
    <CardContainer>
      <UserInfoContainer>
        <ProfilePicM source={props.userImg} />
        <NameContainer>
          <HeaderFive>{props.userName}</HeaderFive>
          <HeaderSix> wants to follow you</HeaderSix>
        </NameContainer>
      </UserInfoContainer>
      <ButtonsContainer>
        <BtnCta>
          <BtnTextCta>accept</BtnTextCta>
        </BtnCta>
        <BtnDefault>
          <BtnTextDefault>decline</BtnTextDefault>
        </BtnDefault>
      </ButtonsContainer>
    </CardContainer>
  );
}
