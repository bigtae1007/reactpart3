import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//컴포넌트
import Content from "../features/instar/Content";
import AddComment from "../features/instar/AddComment";
import CommentList from "../features/instar/CommentList";

export default function Comment() {
  const { id, index } = useParams();
  const postData = useSelector((state) => state.post.post);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Content key={postData[index].id} post={postData[index]} index={index} />
      <AddComment />
      <CommentList comment={postData[index].comment} />
    </>
  );
}
