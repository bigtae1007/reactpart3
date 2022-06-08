import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function AddPosting() {
  return (
    <Link to="/add">
      <AddBtn>+</AddBtn>
    </Link>
  );
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
  font-size: 4rem;
  line-height: 10px;
  border: none;
`;
