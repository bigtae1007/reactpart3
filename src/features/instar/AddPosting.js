import React from "react";
import styled from "styled-components";

export default function AddPosting() {
  return <AddBtn>추가 버튼</AddBtn>;
}

const AddBtn = styled.button`
  width: 4rem;
  height: 4rem;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  background-color: var(--blue);
  color: var(--white);
`;
