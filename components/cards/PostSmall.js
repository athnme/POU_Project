import React from "react";
import styled from "styled-components/native";

const PointContainer = styled.TouchableOpacity`
  width: clamp(120px, calc(50vw - 20px), 187px);
  height: clamp(120px, calc(50vw - 20px), 187px);
`;

const PointImage = styled.Image`
  border-radius: 16px;
  width: 100%;
  height: 100%;
`;

export default function PostSmall(props) {
  return (
    <PointContainer onPress={props.postScreen}>
      <PointImage source={props.postImgSrc} />
    </PointContainer>
  );
}
