import React from "react";
import styled from "styled-components/native";

import { HeaderThree } from "../Styles/Typography";

const CardContainer = styled.View`
  width: clamp(120px, calc(50vw - 20px), 187px);
  height: clamp(120px, calc(50vw - 20px), 187px);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const LocationImgContainer = styled.View`
  grid-column: 1;
  grid-row: 1;
`;

const LocationImg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const LocationNameContainer = styled.View`
  padding: 16px;
  grid-row: 1;
  grid-column: 1;
  justify-content: flex-end;
`;

export default function SearchProfileCard(props) {
  return (
    <CardContainer>
      <LocationImgContainer>
        <LocationImg source={props.postImgSrc} />
      </LocationImgContainer>
      <LocationNameContainer>
        <HeaderThree>{props.locationName}</HeaderThree>
      </LocationNameContainer>
    </CardContainer>
  );
}
