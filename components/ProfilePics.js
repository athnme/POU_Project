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

const XL = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: solid 2px #cecece;
`;

const XL_Active = styled(XL)`
  border-color: #33d17c;
`;

const L = styled(XL)`
  width: 64px;
  height: 64px;
`;

const L_Active = styled(L)`
  border-color: #33d17c;
`;

const M = styled(XL)`
  width: 48px;
  height: 48px;
`;

const M_Active = styled(M)`
  border-color: #33d17c;
`;

const S = styled(XL)`
  width: 24px;
  height: 24px;
`;

const S_Active = styled(S)`
  border-color: #33d17c;
`;

// Components

export function ProfilePicXL() {
  return <XL source={require("../assets/Profile_Pic.jpg")} />;
}

export function ProfilePicXL_Active() {
  return <XL_Active source={require("../assets/Profile_Pic.jpg")} />;
}

export function ProfilePicL() {
  return <L source={require("../assets/Profile_Pic.jpg")} />;
}

export function ProfilePicL_Active() {
  return <L_Active source={require("../assets/Profile_Pic.jpg")} />;
}

export function ProfilePicM() {
  return <M source={require("../assets/Profile_Pic.jpg")} />;
}

export function ProfilePicM_Active() {
  return <M_Active source={require("../assets/Profile_Pic.jpg")} />;
}

export function ProfilePicS() {
  return <S source={require("../assets/Profile_Pic.jpg")} />;
}

export function ProfilePicS_Active() {
  return <S_Active source={require("../assets/Profile_Pic.jpg")} />;
}
