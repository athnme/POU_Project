import React from "react";
import styled from "styled-components/native";

const PointContainer = styled.View`
  width: calc(50vw - 20px);
  height: calc(50vw - 20px);
  max-width: 177px;
  max-height: 177px;
`;

const PointImage = styled.Image`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function PostSmall(props) {
  return (
    <PointContainer>
      <PointImage source={props.postImgSrc} />
    </PointContainer>
  );
}
