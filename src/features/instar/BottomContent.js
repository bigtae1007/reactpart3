import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
//컴포넌트
import Text from "../../elem/Text";
import { __addHeart, __deleteHeart } from "../../redux/modules/postingSlice";

export default function BottomContent({ commentCount, heart, id }) {
  const [heartState, setHeart] = useState(false);
  const dispatch = useDispatch();
  const storge = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    heart?.forEach((v) => {
      if (v === storge.id) {
        setHeart(true);
        return;
      }
    });
  }, [heart]);

  const changeHeart = () => {
    const storge = JSON.parse(localStorage.getItem("user"));
    const heartData = {
      id: id,
      myId: storge.id,
    };

    if (heartState) {
      dispatch(__deleteHeart(heartData));
      setHeart(false);
    } else {
      dispatch(__addHeart(heartData));
      setHeart(true);
    }
  };
  return (
    <>
      <WrapFlex>
        <WrapCount>
          <Text font="body">
            좋아요 <span>{heart?.length}</span>개
          </Text>
          <Text font="body">
            댓글 <span>{commentCount}</span>개
          </Text>
        </WrapCount>
        <HeartText heart={heartState} onClick={changeHeart}>
          ♥
        </HeartText>
      </WrapFlex>
    </>
  );
}

const WrapFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-bottom: 1px solid #000;
  margin-bottom: 40px;
`;

const WrapCount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 300px;
`;

const HeartText = styled.p`
  font-size: 3rem;
  color: ${({ heart }) => (heart ? "var(--red)" : "var(--grey)")};
  cursor: pointer;
`;
