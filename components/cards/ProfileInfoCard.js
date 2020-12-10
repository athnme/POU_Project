import React from "react";
import styled from "styled-components/native";
import { BtnCta } from "../Styles/ButtonStyles";

import { ProfilePicL } from "../Styles/ProfilePicStyles";
import {
  HeaderFive,
  HeaderSix,
  HeaderThree,
  BtnTextCta,
} from "../Styles/Typography";

const ProfileContainer = styled.View`
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 0 16px 16px;
`;

const InfoCardContainer = styled.View`
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

const PicStatContainer = styled.View`
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  max-width: 290px;
  flex-grow: 1;
`;

const Stat = styled.View`
  justify-content: center;
  align-items: center;
`;

const NamesButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NamesContainer = styled.View`
  gap: 4px;
`;

export default function ProfileInfoCard({
  userImg,
  pointCount,
  followerCount,
  followingCount,
  wholeName,
  message,
}) {
  return (
    <ProfileContainer>
      <InfoCardContainer>
        <PicStatContainer>
          <ProfilePicL source={userImg} />
          <StatsContainer>
            <Stat>
              <HeaderThree>{pointCount}</HeaderThree>
              <HeaderSix>Points</HeaderSix>
            </Stat>
            <Stat>
              <HeaderThree>{followerCount}</HeaderThree>
              <HeaderSix>Followers</HeaderSix>
            </Stat>
            <Stat>
              <HeaderThree>{followingCount}</HeaderThree>
              <HeaderSix>Following</HeaderSix>
            </Stat>
          </StatsContainer>
        </PicStatContainer>
        <NamesButtonContainer>
          <NamesContainer>
            <HeaderFive>{wholeName}</HeaderFive>
            <HeaderSix>{message}</HeaderSix>
          </NamesContainer>
          <BtnCta>
            <BtnTextCta>follow</BtnTextCta>
          </BtnCta>
        </NamesButtonContainer>
      </InfoCardContainer>
    </ProfileContainer>
  );
}
