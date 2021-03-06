import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import Image from "../../elem/Image";
import Text from "../../elem/Text";

export default function MiddleContent({ text, img, id, index, layout }) {
  const navigate = useNavigate();
  return (
    <>
      <WrapTextImg layout={layout}>
        <TextDiv
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/detail/${id}/${index}`);
          }}
        >
          <Text color="black" font="head02">
            {text}
          </Text>
        </TextDiv>
        <Image img={img} size="middle" />
      </WrapTextImg>
    </>
  );
}

const WrapTextImg = styled.div`
  border: 1px dotted #eee;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  padding: 10px;
  flex-direction: ${({ layout }) => layout};
`;

const TextDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;
