import React from "react";
import styled from "styled-components";
//컴포넌트
import Image from "../../elem/Image";
import Text from "../../elem/Text";

export default function MiddleContent() {
  return (
    <>
      <WrapTextImg>
        <TextDiv>
          <Text color="black" font="head02">
            asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas
          </Text>
        </TextDiv>
        <Image size="middle" />
      </WrapTextImg>
    </>
  );
}

const WrapTextImg = styled.div`
  border: 1px dotted #eee;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  padding: 10px;
`;

const TextDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;
