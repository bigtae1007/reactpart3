import React from "react";
import styled from "styled-components";
//컴포넌트
import Text from "../../elem/Text";

export default function BottomContent() {
  return (
    <>
      <WrapFlex>
        <WrapCount>
          <Text font="body">
            좋아요 <span>1</span>개
          </Text>
          <Text font="body">
            댓글 <span>1</span>개
          </Text>
        </WrapCount>
        <HeartText>♥</HeartText>
      </WrapFlex>
    </>
  );
}

const WrapFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-bottom: 1px solid #000;
  margin-bottom: 40px;
`;

const WrapCount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 300px;
`;

const HeartText = styled.p`
  font-size: 3rem;
`;
