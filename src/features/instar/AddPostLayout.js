import React from "react";
import styled from "styled-components";

export default function AddpostLayout({ setLayout }) {
  const changeLayout = (e) => {
    setLayout(e.target.value);
  };
  return (
    <>
      <p>레이아웃 추가하기</p>
      <WrapSelect onChange={changeLayout}>
        <option value="row">선택하시면 예시 이미지가 변합니다.</option>
        <option value="row">이미지를 우측에 표시하기</option>
        <option value="row-reverse">이미지를 좌측에 표시하기</option>
        <option value="column-reverse">이미지를 위에 표시하기</option>
        <option value="column">이미지를 아래에 표시하기</option>
      </WrapSelect>
    </>
  );
}

const WrapSelect = styled.select`
  border: none;
  width: 300px;
  height: 50px;
  color: var(--blue);
  outline: none;
`;
