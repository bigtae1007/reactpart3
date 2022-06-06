import React from "react";
import styled from "styled-components";

export default function PreviewPost({ text, img, layout }) {
  return (
    <>
      <WrapView style={{ flexDirection: layout }}>
        <TextDiv>{text}</TextDiv>
        <ImgDiv img={img} />
      </WrapView>
    </>
  );
}

const WrapView = styled.div`
  border: 1px solid #000;
  display: flex;
  gap: 20px;
`;

const TextDiv = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 300px;
  text-align: center;
  padding: 10px 0;
`;
const ImgDiv = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 300px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
