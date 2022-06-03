import React from "react";
import styled from "styled-components";
//컴포넌트
import Image from "../../elem/Image";
import Text from "../../elem/Text";

export default function TopContent() {
  return (
    <>
      <WrapTopContent>
        <WrapProfile>
          <Image size="profile" />
          <Text color="black" font="body">
            id가 들어가야지 id가 들어가야지 id가 들어가야지 id가 들어가야지 id가
          </Text>
        </WrapProfile>

        <Text color="dGrey" font="body">
          시간이 들어가야 겠네요
        </Text>
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
