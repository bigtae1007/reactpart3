import React from "react";
import styled from "styled-components";
//컴포넌트
import Content from "../features/instar/Content";
import AddComment from "../features/instar/AddComment";
import CommentList from "../features/instar/CommentList";

export default function Comment() {
  return (
    <>
      <Content />
      <div>
        <AddComment />
        <CommentList />
      </div>
    </>
  );
}
