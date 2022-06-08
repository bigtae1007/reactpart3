import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../elem/Button";
import AddPostImg from "../features/instar/AddPostImg";
import AddpostLayout from "../features/instar/AddPostLayout";
import AddPostText from "../features/instar/AddPostText";
import PreviewPost from "../features/instar/PreviewPost";
import { __addPost, __changePost } from "../redux/modules/postingSlice";

export default function ChangePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const postList = useSelector((state) => state.post.post);
  const currentPost = postList.filter((v) => {
    return v.id === id ? true : false;
  });
  const dispatch = useDispatch();
  const [img, setImg] = useState(currentPost[0]?.img);
  const [text, setText] = useState(currentPost[0]?.postText);
  const [layout, setLayout] = useState(currentPost[0]?.layout);
  const [btn, setBtn] = useState(true);

  React.useEffect(() => {
    setImg(currentPost[0]?.img);
    setText(currentPost[0]?.postText);
    setLayout(currentPost[0]?.layout);
  }, [postList]);
  React.useEffect(() => {
    // 버튼 잠금
    if (text !== "" && layout !== "" && img !== "") {
      setBtn(false);
    } else {
      setBtn(true);
    }
  }, [text, layout, img]);

  const changePost = () => {
    const postData = {
      id: id,
      post: {
        postText: text,
        img: img,
        layout: layout,
      },
    };
    dispatch(__changePost(postData));
    navigate("/");
  };

  return (
    <>
      <h1>게시글 수정하기</h1>
      <AddPostImg setImg={setImg} />
      <AddpostLayout setLayout={setLayout} />
      <AddPostText text={text} setText={setText} />
      <div>
        <Button
          size="size1"
          color="white"
          bgcolor={btn ? "grey" : "blue"}
          onClick={changePost}
          disabled={btn}
        >
          수정하기
        </Button>
      </div>
      <PreviewPost layout={layout} text={text} img={img} />
    </>
  );
}
