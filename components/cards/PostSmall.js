import React from "react";
import styled from "styled-components/native";

const PointContainer = styled.View`
  width: calc(50% - 4px);
  max-width: 182px;
  height: 182px;
`;

const PointImage = styled.Image`
  border-radius: 16px;
  width: 100%;
  height: 100%;
`;

export default function PostSmall(props) {
  return (
    <PointContainer>
      <PointImage source={props.postImgSrc} />
    </PointContainer>
  );
}
