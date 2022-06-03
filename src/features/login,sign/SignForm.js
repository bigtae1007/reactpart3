import React from "react";
import styled from "styled-components";
import Button from "../../elem/Button";
import Input from "../../elem/Input";
import Text from "../../elem/Text";

export default function SignForm() {
  const sign = (e) => {
    e.preventDefault();
    alert("bb");
  };
  return (
    <>
      <WrapForm onSubmit={sign}>
        <Label htmlFor="id">아이디</Label>
        <Input type="email" id="id" required />
        <Label htmlFor="nick">닉네임</Label>
        <Input type="text" id="nick" required />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" required />
        <Label htmlFor="passwordCheck">비밀번호 확인</Label>
        <Input type="password" id="passwordCheck" required />
        <Button size="size1" color="white" bgcolor="blue">
          <Text font="head02">회원가입하기</Text>
        </Button>
      </WrapForm>
    </>
  );
}

const Label = styled.label`
  margin: 15px 0 0;
`;
const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
