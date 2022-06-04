import React from "react";
import styled from "styled-components";
//컴포넌트
import Image from "../../elem/Image";
import Text from "../../elem/Text";

export default function CommentCard({ date, name, profile, text }) {
  return (
    <>
      <WrapComment>
        <Image size="profile" />
        <Text font="body" style={{ width: "100px" }}>
          {name}
        </Text>
        <Text font="body" style={{ minWidth: "100px", width: "200px" }}>
          {text}
        </Text>
        <Text font="body" color="dGrey">
          {date}
        </Text>
      </WrapComment>
    </>
  );
}
const WrapComment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px 10px;
  align-items: center;
  margin: 10px 0 0;
  border-bottom: 1px solid var(--grey);
`;
