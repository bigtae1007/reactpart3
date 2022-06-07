import React from "react";
//컴포넌트
import MiddleContent from "./MiddleContent";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";

export default function Content({ post, index }) {
  return (
    <>
      <TopContent
        profile={post?.ownerProfile}
        owner={post?.owner}
        date={post?.postDate}
      />
      <MiddleContent
        text={post?.postText}
        img={post?.img}
        id={post?.id}
        index={index}
        layout={post?.layout}
      />
      <BottomContent
        commentCount={post?.comment?.length}
        heartCount={post?.heart?.length}
      />
    </>
  );
}
