import React from "react";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
// 컴포넌트
import GlobalStyle from "./elem/GlobalStyle";
import Sign from "./route/Sign";
import Comment from "./route/Comment";
import Mainpage from "./route/Mainpage";
import Login from "./route/Login";

import { changeName, __addUser, __getMemos } from "./redux/modules/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firbase";

function App() {
  const dispatch = useDispatch();
  const [loginState, setloginState] = React.useState(false);
  // const aa = useSelector((state) => state);
  // dispatch(__addUser());
  console.log(loginState);
  const loginCheck = async (user) => {
    if (user) {
      setloginState(true);
    } else {
      setloginState(false);
    }
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Header loginState={loginState} setloginState={setloginState} />
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
