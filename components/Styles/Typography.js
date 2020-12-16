import styled from "styled-components/native";

export const ParagraphDefault = styled.Text`
  color: #cecece;
  font-size: 10px;
  line-height: 15px;
`;

export const ParagraphBold = styled(ParagraphDefault)`
  font-weight: bold;
`;

export const HeaderSix = styled(ParagraphDefault)`
  font-size: 12px;
  line-height: 18px;
`;

export const HeaderFive = styled(HeaderSix)`
  font-weight: bold;
`;

export const HeaderFour = styled(ParagraphDefault)`
  font-size: 16px;
  line-height: 24px;
`;

export const HeaderThree = styled(HeaderFour)`
  font-weight: bold;
`;

export const HeaderTwo = styled(ParagraphDefault)`
  font-size: 20px;
  line-height: 30px;
`;

export const HeaderOne = styled(HeaderTwo)`
  font-weight: bold;
`;

export const BtnTextDefault = styled(HeaderSix)``;

export const BtnTextCta = styled(BtnTextDefault)`
  color: #07211f;
`;
