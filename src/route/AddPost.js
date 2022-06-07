import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../elem/Button";
import Text from "../elem/Text";
import AddPostImg from "../features/instar/AddPostImg";
import AddpostLayout from "../features/instar/AddPostLayout";
import AddPostText from "../features/instar/AddPostText";
import PreviewPost from "../features/instar/PreviewPost";
import { __addPost } from "../redux/modules/postingSlice";

export default function AddPost() {
  const dispatch = useDispatch();
  const [img, setImg] = useState(
    "http://phone.ybmclass.com/common_css/img/noimage.gif"
  );
  const [text, setText] = useState("텍스트가 들어갈 자리입니다.");
  const [layout, setLayout] = useState("row");

  const addPost = () => {
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

    const addPostData = {
      img: img,
      owner: storge.id,
      ownerProfile: "http://phone.ybmclass.com/common_css/img/noimage.gif",
      postText: text,
      layout: layout,
      postDate: dateString + " " + timeString,
      comment: [],
      heart: [],
    };
    dispatch(__addPost(addPostData));
  };

  return (
    <>
      <h1>게시글 작성</h1>
      <AddPostImg setImg={setImg} />
      <AddpostLayout setLayout={setLayout} />
      <AddPostText setText={setText} />
      <div>
        <Button size="size1" color="white" bgcolor="blue" onClick={addPost}>
          저장하기
        </Button>
      </div>
      <PreviewPost layout={layout} text={text} img={img} />
    </>
  );
}
