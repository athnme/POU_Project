import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { HeaderSix, HeaderFive } from "../Styles/Typography";
import { ProfilePicM } from "../Styles/ProfilePicStyles";
import { BtnDefault, BtnCta } from "../Styles/ButtonStyles";
import { BtnTextDefault, BtnTextCta } from "../Styles/Typography";

const CardContainer = styled.View`
  background-color: #042f2c;
  padding: 16px;
  border-radius: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 64px;
  row-gap: 16px;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
`;

const UserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  justify-content: flex-start;
  flex-grow: 1;
`;

const NameContainer = styled.View``;

const ButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  flex-grow: 1;
  justify-content: flex-end;
`;

export default function SearchProfileCard(props) {
  return (
    <CardContainer>
      <UserInfoContainer>
        <ProfilePicM source={props.userImg} />
        <NameContainer>
          <HeaderFive>{props.userName} </HeaderFive>
          <HeaderSix>wants to follow you</HeaderSix>
        </NameContainer>
      </UserInfoContainer>
      <ButtonsContainer>
        <BtnCta style={styles.btnGrow}>
          <BtnTextCta>accept</BtnTextCta>
        </BtnCta>
        <BtnDefault style={styles.btnGrow}>
          <BtnTextDefault>decline</BtnTextDefault>
        </BtnDefault>
      </ButtonsContainer>
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  btnGrow: {
    flexGrow: 1,
  },
});
