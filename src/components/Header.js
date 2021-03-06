import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import { Link } from "react-router-dom";
import { auth } from "../firbase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { changeLogin } from "../redux/modules/userSlice";
export default function Header({ loginState, setloginState }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = async () => {
    const storge = JSON.parse(localStorage.getItem("user"));
    if (storge) {
      localStorage.removeItem("user");
    }
    dispatch(changeLogin(false));
    alert("로그아웃");
    signOut(auth).then(() => {
      setloginState(false);
    });
  };
  return (
    <WrapHeadDiv>
      <Link to="/">
        <LinkHome />
      </Link>
      <WrapBtn>
        <Button
          size="size2"
          border={true}
          color="white"
          bgcolor="blue"
          onClick={() => {
            loginState ? navigate("/login") : navigate("/login");
          }}
        >
          {loginState ? "알림" : "로그인"}
        </Button>
        <Button
          size="size2"
          color="blue"
          bgcolor="grey"
          onClick={() => {
            loginState ? logOut() : navigate("/sign");
          }}
        >
          {loginState ? "로그아웃" : "회원가입"}
        </Button>
      </WrapBtn>
    </WrapHeadDiv>
  );
}

const WrapHeadDiv = styled.div`
  background-color: var(--white);
  border-bottom: 3px double var(--dGrey);
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
