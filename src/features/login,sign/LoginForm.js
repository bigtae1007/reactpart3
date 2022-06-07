import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elem/Button";
import Input from "../../elem/Input";
import Text from "../../elem/Text";
import { auth } from "../../firbase";
import { changeLogin } from "../../redux/modules/userSlice";

export default function LoginForm() {
  const nowLoginState = useSelector((state) => state.user.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [check, setCheck] = useState(true);
  const [dataList, setDataList] = useState({
    email: "",
    password: "",
  });
  // submit 이벤트
  const login = (e) => {
    e.preventDefault();
    loginFB(dataList);
  };

  // ID, PASSWORD 일치 확인
  const loginFB = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const storgeData = {
        id: data.email,
        expire: Date.now() + 12 * 60 * 60 * 1000,
      };
      localStorage.setItem("user", JSON.stringify(storgeData));
      dispatch(changeLogin(true));
      alert("로그인이 완료됐습니다");
    } catch (error) {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
      return;
    }
    navigate("/");
  };
  // input 관리
  const inputChange = (e) => {
    const { value, id } = e.target;
    setDataList({ ...dataList, [id]: value });
  };

  // input onchange 발생
  React.useEffect(() => {
    // 버튼 잠금
    if (dataList.email !== "" && dataList.password !== "") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [dataList]);

  // 로그인 중일 시 페이지 로그인 이전 페이지로 이동
  React.useEffect(() => {
    if (nowLoginState) {
      navigate(-1);
      alert("로그인 이전 화면으로 이동합니다.");
    }
  }, [nowLoginState]);
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
