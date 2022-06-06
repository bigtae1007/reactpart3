import React, { useState } from "react";
import styled from "styled-components";

export default function AddPostImg({ setImg }) {
  const [name, setName] = useState("");

  const loadImg = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImg(`${e.target.result}`);
    };
    setName(`${file.name}`);
    reader.readAsDataURL(file);
  };
  return (
    <>
      <p>사진 추가하기</p>
      <WrapAddImg>
        <AddImg htmlFor="image">업로드</AddImg>
        <InputText>{name}</InputText>
        <input
          style={{ display: "none" }}
          type="file"
          id="image"
          onChange={loadImg}
        />
      </WrapAddImg>
    </>
  );
}

const AddImg = styled.label`
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  color: var(--white);
  border-radius: 5px;
  background-color: var(--blue);
`;

const WrapAddImg = styled.div`
  border: 1px solid #000;
  display: flex;
  align-items: center;
`;
const InputText = styled.p`
  border-bottom: 1px solid var(--grey);
  color: var(--dgrey);
  min-width: 200px;
`;
