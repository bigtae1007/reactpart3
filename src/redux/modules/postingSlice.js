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
    addUser: (state, action) => {
      // state.user = [...state.user, action.payload];
      console.log(action.payload);
    },
    changeLogin: (state, action) => {
      console.log(action);
      state.login = action.payload;
    },
    getRequest: (state, action) => {
      state.loading = action.payload;
    },
    getRequestSuccess: (state, action) => {
      console.log("성공", action);
    },
    getRequestError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// export const __addUser = (payload) => async (dispatch, getState) => {
//   dispatch(getRequest(true));
//   try {
//     console.log(payload);
//   } catch (error) {
//     dispatch(getRequestError(error));
//   } finally {
//     dispatch(getRequest(false));
//   }
// };
// export const __getMemos = () => {
//   return async function (dispatch) {
//     // 요청 시작과 함께 loading true로 변경
//     dispatch(getRequest(true));
//     try {
//       // 성공시 데이터 store 저장 액션
//       const memo_data = await getDocs(collection(db, "memo"));
//       const memo_list = [];
//       memo_data.forEach((doc) => {
//         memo_list.push({ id: doc.id, ...doc.data() });
//       });
//       dispatch(getRequestSuccess(memo_list));
//     } catch (error) {
//       // 에러코드 저장 액션
//       dispatch(getRequestError(error));
//     } finally {
//       // 끝나고 load false로 변경
//       dispatch(getRequest(false));
//     }
//   };
// };

export const {
  changeName,
  getRequest,
  getRequestError,
  getRequestSuccess,
  changeLogin,
} = postSlice.actions;
export default postSlice.reducer;
