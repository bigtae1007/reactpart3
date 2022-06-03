import React from "react";
import styled, { css } from "styled-components";

export default function Button({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
}

const Btn = styled.button`
  ${({ size }) => {
    switch (size) {
      case "size1":
        return size1;
      case "size2":
        return size2;
      case "size3":
        return size3;
      default:
        break;
    }
  }}
  background-color: #ccc;

  border: ${({ border }) => {
    return border ? "1px solid var(--blue)" : "none";
  }};
  color: ${({ color }) => `var(--${color})`};
  background-color: ${({ bgcolor }) => `var(--${bgcolor})`};
  height: 40px;
`;

export const size1 = css`
  width: 100%;
`;
export const size2 = css`
  width: 60%;
`;
export const size3 = css`
  width: 30%;
`;
