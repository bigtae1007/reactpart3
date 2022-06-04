import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
//컴포넌트
import Content from "../features/instar/Content";
import AddPosting from "../features/instar/AddPosting";

export default function Mainpage() {
  const postData = useSelector((state) => state.post.post);
  return (
    <>
      {postData.map((v, l) => {
        return <Content key={v.id} post={v} index={l} />;
      })}
      <AddPosting />
    </>
  );
}
