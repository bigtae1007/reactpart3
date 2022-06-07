import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import Text from "../elem/Text";
import AddPostImg from "../features/instar/AddPostImg";
import AddpostLayout from "../features/instar/AddPostLayout";
import AddPostText from "../features/instar/AddPostText";
import PreviewPost from "../features/instar/PreviewPost";
import { __addPost } from "../redux/modules/postingSlice";

export default function AddPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  // "http://phone.ybmclass.com/common_css/img/noimage.gif"

  const [text, setText] = useState("");
  const [layout, setLayout] = useState("");
  const [btn, setBtn] = useState(true);
  React.useEffect(() => {
    // 버튼 잠금
    if (text !== "" && layout !== "" && img !== "") {
      setBtn(false);
    } else {
      setBtn(true);
    }
  }, [text, layout, img]);
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
    navigate("/");
  };

  return (
    <>
      <h1>게시글 작성</h1>
      <AddPostImg setImg={setImg} />
      <AddpostLayout setLayout={setLayout} />
      <AddPostText setText={setText} />
      <div>
        <Button
          size="size1"
          color="white"
          bgcolor={btn ? "grey" : "blue"}
          onClick={addPost}
          disabled={btn}
        >
          저장하기
        </Button>
      </div>
      <PreviewPost layout={layout} text={text} img={img} />
    </>
  );
}
