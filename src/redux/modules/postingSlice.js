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
    post: [],
    loading: false,
    error: null,
  },
  reducers: {
    addPost: (state, action) => {
      state.post = [action.payload, ...state.post];
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
    deletePost: (state, action) => {
      const newPost = state.post.filter((v) => {
        return v.id === action.payload ? false : true;
      });
      state.post = newPost;
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
export const __deletePost = (payload) => async (dispatch, getState) => {
  dispatch(getRequest(true));
  try {
    const docRef = doc(db, "post", payload);
    console.log(payload, "미들");
    await deleteDoc(docRef);
    dispatch(deletePost(payload));
  } catch (error) {
    console.log(error);
    dispatch(getRequestError(error));
  } finally {
    dispatch(getRequest(false));
  }
};

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
  deletePost,
} = postSlice.actions;
export default postSlice.reducer;
