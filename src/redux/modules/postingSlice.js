import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../firbase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const postSlice = createSlice({
  name: "posting",
  initialState: {
    post: [
      {
        img: "이미지 주소",
        ownerProfile: "t123124ls",
        id: "id를 갖오자",
        owner: "작성자가 들어가겠지",
        postText: "내용이 들어가자",
        postDate: "만든 날짜?시간",
        comment: [
          {
            profile: "사진",
            name: "이름",
            commentText: "댓124이 들어가자",
            commentDate: "날짜가 들어가자",
          },
          {
            profile: "사진",
            name: "이름",
            commentText: "댓글asd 들어가자",
            commentDate: "날123 들어가자",
          },
        ],
      },
      {
        img: "이미지 주소",
        ownerProfile: "tkasdwls",
        id: "id를ㅁㄴㅇㅁㄴㅇ자",
        owner: "작성자가ㅁㄴㅇㅁㄴㄹ겠지",
        postText: "내용이 들어ㅁㄴㄻㄴ자",
        postDate: "만든 날ㅁㄴㅇㅁㄴㅇ시간",
        comment: [
          {
            profile: "사진",
            name: "이ㅁㄴㅇ름",
            commentText: "댓ㅁㄴㅇㅁㄴㄹ들어가자",
            commentDate: "날짜가 ㅁㄴㅇㅁㄴㅇ",
          },
          {
            profile: "사진",
            name: "이ㅁㄴㅇ름",
            commentText: "댓ㅁㄴㅇㅁㄴㄹ들어가자",
            commentDate: "날짜가 ㅁㄴㅇㅁㄴㅇ",
          },
          {
            profile: "사진",
            name: "이ㅁㄴㅇ름",
            commentText: "댓ㅁㄴㅇㅁㄴㄹ들어가자",
            commentDate: "날짜가 ㅁㄴㅇㅁㄴㅇ",
          },
        ],
      },
      {
        img: "이미지 주소",
        ownerProfile: "tkwls",
        id: "id를 123",
        owner: "작성자가 124지",
        postText: "내용이37563가자",
        postDate: "346436짜?시간",
        comment: [
          {
            profile: "사진",
            name: "이12412",
            commentText: "댓글234112312들어가자",
            commentDate: "날짜가56456가자",
          },
        ],
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    addPost: (state, action) => {
      state.post = [action.payload, ...state.post];
      console.log(state.post);
    },
    addComment: (state, action) => {
      const myPost = state.post.filter((v) => {
        return v?.id === action.payload.postId ? true : false;
      });
      myPost[0].comment = [action.payload, ...myPost[0].comment];
    },
    addHeart: (state, action) => {
      const myHeartPost = state.post.filter((v) => {
        return v?.id === action.payload.id ? true : false;
      });
      myHeartPost[0].heart = [action.payload.myId, ...myHeartPost[0].heart];
    },
    deleteHeart: (state, action) => {
      const myHeartPost = state.post.filter((v) => {
        return v?.id === action.payload.id ? true : false;
      });
      const newHeart = myHeartPost[0]?.heart.filter((v) =>
        v === action.payload.myId ? false : true
      );

      myHeartPost[0].heart = newHeart;
    },
    getRequest: (state, action) => {
      state.loading = action.payload;
    },
    getRequestSuccess: (state, action) => {
      state.post = action.payload;
    },
    getRequestError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const __deleteHeart = (payload) => async (dispatch, getState) => {
  dispatch(getRequest(true));
  try {
    const docRef = doc(db, "post", payload.id);
    const storeData = getState().post.post;
    const beforeHeart = storeData.filter((v) => {
      return v.id === payload.id ? true : false;
    });
    const heartData = beforeHeart[0].heart;
    const newHeart = heartData.filter((v) =>
      v === payload.myId ? false : true
    );
    await updateDoc(docRef, { heart: newHeart });
    dispatch(deleteHeart(payload));
  } catch (error) {
    console.log(error);
    dispatch(getRequestError(error));
  } finally {
    dispatch(getRequest(false));
  }
};

export const __addHeart = (payload) => async (dispatch, getState) => {
  dispatch(getRequest(true));
  try {
    const docRef = doc(db, "post", payload.id);
    const storeData = getState().post.post;
    const beforeHeart = storeData.filter((v) => {
      return v.id === payload.id ? true : false;
    });
    const heartData = beforeHeart[0].heart;
    await updateDoc(docRef, { heart: [...heartData, payload.myId] });
    dispatch(addHeart(payload));
  } catch (error) {
    console.log(error);
    dispatch(getRequestError(error));
  } finally {
    dispatch(getRequest(false));
  }
};

export const __addPost = (payload) => async (dispatch, getState) => {
  dispatch(getRequest(true));
  try {
    const add_Post_data = await addDoc(collection(db, "post"), payload);
    dispatch(addPost({ id: add_Post_data.id, ...payload }));
  } catch (error) {
    dispatch(getRequestError(error));
  } finally {
    dispatch(getRequest(false));
  }
};
export const __addComment = (payload) => async (dispatch, getState) => {
  dispatch(getRequest(true));
  try {
    const docRef = doc(db, "post", payload.postId);
    const storeData = getState().post.post;
    const beforeComment = storeData.filter((v) => {
      return v.id === payload.postId ? true : false;
    });
    const commentdata = beforeComment[0].comment;
    await updateDoc(docRef, { comment: [...commentdata, payload] });
    dispatch(addComment(payload));
  } catch (error) {
    console.log(error);
    dispatch(getRequestError(error));
  } finally {
    dispatch(getRequest(false));
  }
};
export const __getPosts = () => {
  return async function (dispatch) {
    // 요청 시작과 함께 loading true로 변경
    dispatch(getRequest(true));
    try {
      // 성공시 데이터 store 저장 액션
      const post_data = await getDocs(collection(db, "post"));
      const post_list = [];
      post_data.forEach((doc) => {
        post_list.push({ id: doc.id, ...doc.data() });
      });
      dispatch(getRequestSuccess(post_list));
    } catch (error) {
      // 에러코드 저장 액션
      dispatch(getRequestError(error));
    } finally {
      // 끝나고 load false로 변경
      dispatch(getRequest(false));
    }
  };
};

export const {
  changeName,
  getRequest,
  getRequestError,
  getRequestSuccess,
  changeLogin,
  addPost,
  addComment,
  addHeart,
  deleteHeart,
} = postSlice.actions;
export default postSlice.reducer;
