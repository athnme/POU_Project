import React from "react";
import styled from "styled-components/native";

import { HeaderSix, HeaderFive } from "../Styles/Typography";
import { ProfilePicM } from "../Styles/ProfilePicStyles";
import { BtnIcon } from "../Styles/ButtonStyles";
import { CloseIcon } from "../Icons";

const CardContainer = styled.View`
  width: 100%;
  background-color: #042f2c;
  padding: 16px;
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

const UserInfoContainer = styled.View`
  gap: 16px;
  align-items: center;
  flex-direction: row;
`;

const NameContainer = styled.View`
  gap: 4px;
`;

export default function SearchProfileCard(props) {
  return (
    <CardContainer>
      <UserInfoContainer>
        <ProfilePicM source={props.userImg} />
        <NameContainer>
          <HeaderFive>{props.userName}</HeaderFive>
          <HeaderSix>{props.userWholeName}</HeaderSix>
        </NameContainer>
      </UserInfoContainer>
      <BtnIcon>
        <CloseIcon />
      </BtnIcon>
    </CardContainer>
  );
}
