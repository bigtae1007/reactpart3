import React from "react";
import styled from "styled-components";
//컴포넌트
import Content from "./Content";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

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
