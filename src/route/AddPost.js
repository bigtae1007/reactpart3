import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import Text from "../elem/Text";
import AddPostImg from "../features/instar/AddPostImg";
import AddpostLayout from "../features/instar/AddPostLayout";
import AddPostText from "../features/instar/AddPostText";
import PreviewPost from "../features/instar/PreviewPost";

export default function AddPost() {
  const [img, setImg] = useState(
    "http://phone.ybmclass.com/common_css/img/noimage.gif"
  );
  const [text, setText] = useState("텍스트가 들어갈 자리입니다.");
  const [layout, setLayout] = useState("row");
  return (
    <>
      <h1>게시글 작성</h1>
      <AddPostImg setImg={setImg} />
      <AddpostLayout setLayout={setLayout} />
      <AddPostText setText={setText} />
      <div>
        <Button size="size1" color="white" bgcolor="blue">
          저장하기
        </Button>
      </div>
      <PreviewPost layout={layout} text={text} img={img} />
    </>
  );
}
