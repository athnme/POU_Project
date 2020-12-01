import React from "react";

import styled from "styled-components/native";

const DefaultScreen = styled.View`
  flex: 1;
  background-color: #07211f;
  background-image: linear-gradient(180deg, #07211f 3.28%, #030d12 96.74%);
  color: #cecece;

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

export default function YourProfileScreen() {
  return (
    <DefaultScreen>
      <HeaderTwo>Your Profile</HeaderTwo>
    </DefaultScreen>
  );
}
