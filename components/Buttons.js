import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import styled from "styled-components/native";

import {
  BackIcon,
  CloseIcon,
  HomeIcon,
  LikeIcon,
  MarkUserIcon,
  NotificationIcon,
  OptionsIcon,
  SearchIcon,
  AddIcon,
} from "./Icons";

import { ProfilePicS, ProfilePicXL } from "./ProfilePics";

// Styles

const BtnDefault = styled.TouchableOpacity`
  padding: 6px 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  border: solid 2px #cecece;
  color: #cecece;
`;

const BtnCta = styled(BtnDefault)`
  border: none;
  color: #07211f;
  background: #33d17c;
`;

const BtnIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const BtnIcon_Margin_Right = styled(BtnIcon)`
  margin-right: 16px;
`;

export function DefaultButton() {
  return (
    <BtnDefault>
      <Text>Default Button</Text>
    </BtnDefault>
  );
}

export function CtaButton() {
  return (
    <BtnCta>
      <Text>CTA Button</Text>
    </BtnCta>
  );
}

export function BackButton() {
  return (
    <BtnIcon>
      <BackIcon />
    </BtnIcon>
  );
}

export function CloseButton() {
  return (
    <BtnIcon>
      <CloseIcon />
    </BtnIcon>
  );
}

export function HomeButton() {
  return (
    <BtnIcon>
      <HomeIcon />
    </BtnIcon>
  );
}

export function LikeButton() {
  return (
    <BtnIcon>
      <LikeIcon />
    </BtnIcon>
  );
}

export function MarkButton() {
  return (
    <BtnIcon>
      <MarkUserIcon />
    </BtnIcon>
  );
}

export function NotificationButton() {
  return (
    <BtnIcon>
      <NotificationIcon />
    </BtnIcon>
  );
}

export function SearchButton() {
  return (
    <BtnIcon>
      <SearchIcon />
    </BtnIcon>
  );
}

export function OptionsButton() {
  return (
    <BtnIcon>
      <OptionsIcon />
    </BtnIcon>
  );
}

export function AddButton() {
  return (
    <BtnIcon_Margin_Right>
      <AddIcon />
    </BtnIcon_Margin_Right>
  );
}

export function ProfileButton() {
  return (
    <BtnIcon>
      <ProfilePicS />
    </BtnIcon>
  );
}
