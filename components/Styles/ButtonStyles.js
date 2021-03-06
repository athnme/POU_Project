import styled from "styled-components/native";

export const BtnDefault = styled.TouchableOpacity`
  padding: 6px 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  border: solid 2px #cecece;
  color: #cecece;
  justify-self: stretch;
  min-width: 100px;
`;

export const BtnCta = styled(BtnDefault)`
  border: none;
  color: #07211f;
  background: #33d17c;
`;

export const BtnIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
