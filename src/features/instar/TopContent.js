import React from "react";
import styled from "styled-components";
//컴포넌트
import Image from "../../elem/Image";
import Text from "../../elem/Text";
import ChangePost from "./ChangePostBtn";

export default function TopContent({ profile, owner, date, id }) {
  return (
    <>
      <WrapTopContent>
        <WrapProfile>
          <Image size="profile" img={profile} />
          <Text color="black" font="body">
            {owner}
          </Text>
        </WrapProfile>

        <Text color="dGrey" font="body">
          {date}
        </Text>
        <ChangePost id={id} />
      </WrapTopContent>
    </>
  );
}

const WrapTopContent = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const WrapProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 300px;
`;
