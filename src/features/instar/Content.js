import React from "react";
//컴포넌트
import MiddleContent from "./MiddleContent";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";

export default function Content() {
  return (
    <>
      <TopContent />
      <MiddleContent />
      <BottomContent />
    </>
  );
}
