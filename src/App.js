import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
// 컴포넌트
import GlobalStyle from "./elem/GlobalStyle";
import Sign from "./route/Sign";
import Comment from "./route/Comment";

import Mainpage from "./route/Mainpage";
import { Route, Routes } from "react-router-dom";
import Login from "./route/Login";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/detail/:id" element={<Comment />} />
        <Route path="sign" element={<Sign />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
