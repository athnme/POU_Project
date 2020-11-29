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

// Styles

const IconDefault = styled.Image`
  width: 24px;
  height: 24px;
`;

const IconTall = styled(IconDefault)`
  height: 33px;
`;

const LogoType = styled(IconDefault)`
  width: 41px;
`;

// Components

export function BackIcon() {
  return <IconDefault source={require("../assets/Back.svg")} />;
}

export function CloseIcon() {
  return <IconDefault source={require("../assets/Close.svg")} />;
}

export function HomeIcon() {
  return <IconDefault source={require("../assets/Home.svg")} />;
}

export function LikeIcon() {
  return <IconDefault source={require("../assets/Like.svg")} />;
}

export function IndicatorIcon() {
  return <IconDefault source={require("../assets/Location_Indicator.svg")} />;
}

export function MarkUserIcon() {
  return <IconDefault source={require("../assets/Mark_User.svg")} />;
}

export function NotificationIcon() {
  return <IconDefault source={require("../assets/Notification.svg")} />;
}

export function OptionsIcon() {
  return <IconDefault source={require("../assets/Options.svg")} />;
}

export function SearchIcon() {
  return <IconDefault source={require("../assets/Search.svg")} />;
}

export function Wordmark() {
  return <LogoType source={require("../assets/LogoType.svg")} />;
}

export function AddIcon() {
  return <IconTall source={require("../assets/Add.svg")} />;
}

export function LogoIcon() {
  return <IconTall source={require("../assets/Logo_Icon.svg")} />;
}
