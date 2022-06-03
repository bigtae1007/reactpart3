import React from "react";
import styled, { css } from "styled-components";

export default function Input({ children, ...restProps }) {
  return <StInput {...restProps} />;
}

const StInput = styled.input`
  border: none;
  min-width: 500px;
  width: 100%;
  border-bottom: 1px solid var(--black);
  padding: 5px 10px;
  outline: none;
  :focus {
    transition: 0.5s;
    border: 3px solid var(--blue);
    border-radius: 1rem;
  }
`;
