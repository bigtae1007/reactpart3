import React from "react";
import styled from "styled-components";
//컴포넌트
import CommentCard from "./CommentCard";

export default function CommentList({ comment }) {
  return (
    <>
      {comment?.map((v, l) => {
        return (
          <CommentCard
            key={l}
            date={v.date}
            name={v.id}
            profile={v.profile}
            text={v.text}
          />
        );
      })}
    </>
  );
}
