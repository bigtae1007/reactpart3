import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../elem/Button";
import Input from "../../elem/Input";
import Text from "../../elem/Text";

export default function SignForm() {
  const [check, setCheck] = useState(true);
  const [dataList, setDataList] = useState({
    email: "",
    nick: "",
    password: "",
    passwordCheck: "",
  });
  const sign = (e) => {
    e.preventDefault();
  };

  const inputChange = (e) => {
    const { value, id } = e.target;
    setDataList({ ...dataList, [id]: value });
  };

  React.useEffect(() => {
    if (
      dataList.email !== "" &&
      dataList.password !== "" &&
      dataList.passwordCheck !== "" &&
      dataList.nick !== ""
    ) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [dataList]);
  return (
    <>
      <WrapForm onSubmit={sign}>
        <Label htmlFor="email">아이디</Label>
        <Input type="email" id="email" required onChange={inputChange} />
        <Label htmlFor="nick">닉네임</Label>
        <Input type="text" id="nick" required onChange={inputChange} />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" required onChange={inputChange} />
        <Label htmlFor="passwordCheck">비밀번호 확인</Label>
        <Input
          type="password"
          id="passwordCheck"
          required
          onChange={inputChange}
        />
        <Button
          size="size1"
          color="white"
          bgcolor={check ? "grey" : "blue"}
          disabled={check}
        >
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
