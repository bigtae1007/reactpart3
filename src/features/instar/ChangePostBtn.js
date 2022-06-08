import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../elem/Button";
import { __deletePost } from "../../redux/modules/postingSlice";

export default function ChangePostBtn({ id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changePost = () => {
    navigate(`/change/${id}`);
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
