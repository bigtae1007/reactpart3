import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

export default function Header() {
  return (
    <WrapHeadDiv>
      <LinkHome />
      <WrapBtn>
        <Button size="size2" border={true} color="white" bgcolor="blue">
          로그인
        </Button>
        <Button size="size2" color="blue" bgcolor="grey">
          회원가입
        </Button>
      </WrapBtn>
    </WrapHeadDiv>
  );
}

const WrapHeadDiv = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
`;
const LinkHome = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4V3_85G_A89c2OLot11XLQ7G2JB9BHR2Zca_SaB3CmWy_Wzxe167dGmhza5YmD_w-wfo&usqp=CAU");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const WrapBtn = styled.div`
  width: 50%;
  min-width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;
