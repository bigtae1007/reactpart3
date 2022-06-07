import React, { useRef, useState } from "react";
import styled from "styled-components";
//컴포넌트
import Input from "../../elem/Input";
import Button from "../../elem/Button";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addComment } from "../../redux/modules/postingSlice";

export default function AddComment() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [text, setText] = useState("");
  const textChange = (e) => {
    setText(e.target.value);
  };
  const addComment = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    const hours = ("0" + today.getHours()).slice(-2);
    const minutes = ("0" + today.getMinutes()).slice(-2);
    const seconds = ("0" + today.getSeconds()).slice(-2);

    const timeString = hours + ":" + minutes + ":" + seconds;
    const dateString = year + "-" + month + "-" + day;
    const storge = JSON.parse(localStorage.getItem("user"));

    const commentData = {
      postId: id,
      id: storge.id,
      text: text,
      date: dateString + " " + timeString,
    };
    dispatch(__addComment(commentData));
  };

  return (
    <>
      <WrapAddCommnet>
        <Input placeholder="20자 이내로 작성해주세요" onChange={textChange} />
        <Button
          size="size2"
          border="yes"
          bgcolor="blue"
          color="white"
          onClick={addComment}
        >
          댓글 추가하기
        </Button>
      </WrapAddCommnet>
    </>
  );
}

const WrapAddCommnet = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 30px;
  margin-bottom: 30px;
`;
