import React from "react";
import styled from "styled-components";
//컴포넌트
import CommentCard from "./CommentCard";

export default function CommentList({ comment }) {
  console.log(comment);
  return (
    <>
      {comment.map((v, l) => {
        return (
          <CommentCard
            key={l}
            date={v.commentDate}
            name={v.name}
            profile={v.profile}
            text={v.commentText}
          />
        );
      })}
    </>
  );
}
