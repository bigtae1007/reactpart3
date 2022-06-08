import React from "react";
import styled from "styled-components";

export default function AddPostText({ setText, text }) {
  const changeText = (e) => {
    if (e.target.value === "") {
      setText("");
    } else {
      setText(`${e.target.value}`);
    }
  };
  return (
    <>
      <p>게시글 입력하기</p>
      <PostText
        placeholder="게시글을 입력해 주세요 !"
        onChange={changeText}
        value={text}
      />
    </>
  );
}

const PostText = styled.textarea`
  border-radius: 15px;
  width: 50%;
  height: 100px;
  padding: 10px;
  outline: none;
  resize: none;
  :focus {
    border: 3px solid var(--blue);
  }
`;
