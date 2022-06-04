import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import Text from "../elem/Text";

export default function MoveLogin() {
  const navigate = useNavigate();

  return (
    <>
      <WrapContent>
        <Text font="big">! STOP !</Text>
        <Text font="head01">로그인 이후에 이용이 가능합니다</Text>
        <Button
          size="size2"
          color="white"
          bgcolor="blue"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인 하러 가기!
        </Button>
        <Button
          size="size2"
          color="white"
          bgcolor="dGrey"
          onClick={() => {
            navigate("/sing");
          }}
        >
          회원 가입하러 가기!
        </Button>
        <Button
          size="size2"
          color="black"
          bgcolor="grey"
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로 가기
        </Button>
      </WrapContent>
    </>
  );
}

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 70vh;
  min-height: 300px;
  justify-content: center;
  align-items: center;
`;
