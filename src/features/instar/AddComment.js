import React from "react";
import styled from "styled-components";
//컴포넌트
import Input from "../../elem/Input";
import Button from "../../elem/Button";

export default function AddComment() {
  return (
    <>
      <WrapAddCommnet>
        <Input placeholder="20자 이내로 작성해주세요" />
        <Button size="size2" border="yes" bgcolor="blue" color="white">
          댓글 추가하기
        </Button>
      </WrapAddCommnet>
    </>
  );
}

const WrapAddCommnet = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 30px;
  margin-bottom: 30px;
`;
