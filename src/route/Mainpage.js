import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
//컴포넌트
import Content from "../features/instar/Content";
import AddPosting from "../features/instar/AddPosting";

export default function Mainpage({ loginState }) {
  const postData = useSelector((state) => state.post.post);
  console.log(postData, "데이터보자");
  return (
    <>
      {postData.map((v, l) => {
        return <Content key={v.id} post={v} index={l} />;
      })}
      {loginState ? <AddPosting /> : null}
    </>
  );
}
