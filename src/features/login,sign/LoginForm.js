import React from "react";
import styled from "styled-components";
import Button from "../../elem/Button";
import Input from "../../elem/Input";
import Text from "../../elem/Text";

export default function LoginForm() {
  const login = (e) => {
    e.preventDefault();
    alert("bb");
  };
  return (
    <>
      <WrapForm onSubmit={login}>
        <Label htmlFor="id">아이디</Label>
        <Input type="email" id="id" required />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" required />
        <Button size="size1" color="white" bgcolor="blue">
          <Text font="head02">로그인하기</Text>
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
