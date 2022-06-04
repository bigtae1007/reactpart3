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

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
    login: false,
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

export const __addUser = (payload) => async (dispatch, getState) => {
  dispatch(getRequest(true));
  try {
    console.log(payload);
  } catch (error) {
    dispatch(getRequestError(error));
  } finally {
    dispatch(getRequest(false));
  }
};
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
} = userSlice.actions;
export default userSlice.reducer;
