import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../../elem/Button";
import { __deletePost } from "../../redux/modules/postingSlice";

export default function ChangePost({ id }) {
  const dispatch = useDispatch();

  const changePost = () => {
    console.log(id);
    console.log("aa");
  };
  const deletePost = () => {
    dispatch(__deletePost(id));
  };
  return (
    <WrapBtn>
      <Button size="size2" bgcolor="blue" color="white" onClick={changePost}>
        수정
      </Button>
      <Button
        size="size2"
        border={true}
        bgcolor="gery"
        color="black"
        onClick={deletePost}
      >
        삭제
      </Button>
    </WrapBtn>
  );
}
const WrapBtn = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;
