import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elem/Button";
import Input from "../../elem/Input";
import Text from "../../elem/Text";
import { auth } from "../../firbase";

export default function LoginForm() {
  const navigate = useNavigate();
  const [check, setCheck] = useState(true);
  const [dataList, setDataList] = useState({
    email: "",
    password: "",
  });
  // submit 로그인 이벤트
  const login = (e) => {
    e.preventDefault();
    loginFB(dataList);
    navigate("/");
  };

  const loginFB = async (data) => {
    const user = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log(user);
  };
  // input 관리
  const inputChange = (e) => {
    const { value, id } = e.target;
    setDataList({ ...dataList, [id]: value });
  };

  React.useEffect(() => {
    // 버튼 잠금
    if (dataList.email !== "" && dataList.password !== "") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [dataList]);
  return (
    <>
      <WrapForm onSubmit={login}>
        <Label htmlFor="email">아이디</Label>
        <Input type="email" id="email" required onChange={inputChange} />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" required onChange={inputChange} />
        <Button
          size="size1"
          color="white"
          bgcolor={check ? "grey" : "blue"}
          disabled={check}
        >
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
