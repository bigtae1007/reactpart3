import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { auth } from "./firbase";
import { onAuthStateChanged, signOut } from "firebase/auth";
// 컴포넌트
import GlobalStyle from "./elem/GlobalStyle";
import Sign from "./route/Sign";
import Comment from "./route/Comment";
import Mainpage from "./route/Mainpage";
import Login from "./route/Login";

import MoveLogin from "./route/MoveLogin";
import AddPost from "./route/AddPost";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "./redux/modules/postingSlice";
import ChangePost from "./route/ChangePost";

function App() {
  const dispatch = useDispatch();
  dispatch(__getPosts());
  const [loginState, setloginState] = React.useState(false);
  const loginCheck = async (user) => {
    if (user) {
      setloginState(true);
    } else {
      setloginState(false);
    }
  };
  const checkStorge = () => {
    const storge = JSON.parse(localStorage.getItem("user"));
    if (storge?.expire > Date.now()) {
      setloginState(true);
    } else {
      alert("로그인 시간이 만료되었습니다. 다시 로그인 해주세요");
      localStorage.removeItem("user");
      signOut(auth).then(() => {
        setloginState(false);
      });
      setloginState(false);
    }
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
    if (loginState) {
      checkStorge();
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header loginState={loginState} setloginState={setloginState} />
      <Routes>
        <Route path="/" element={<Mainpage loginState={loginState} />} />
        <Route path="/detail/:id/:index" element={<Comment />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/change/:id" element={<ChangePost />} />

        <Route path="/please-log" element={<MoveLogin />} />
      </Routes>
    </div>
  );
}

export default App;
