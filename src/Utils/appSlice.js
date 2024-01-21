import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "myStore",
  initialState: {
    loginSignup: false,
    isUserLogged:true,
    searchText: null,
    allImageData: [],
    detailImage: null,
  },
  reducers: {
    toggleLoginSignUp: (state) => {
      state.loginSignup = !state.loginSignup;
    },
    toggleIsUserLogged:(state)=>{
      state.isUserLogged = !state.isUserLogged
    },
    addText: (state, action) => {
      state.searchText = action.payload;
    },
    addAllImageData: (state, action) => {
      state.allImageData = [];
      if (action.payload.length > 0) {
        action.payload.forEach((hit) => {
          state.allImageData.push(hit);
        });
      }
    },
    addDetailImage: (state, action) => {
      state.detailImage = action.payload;
    },
  },
});

export const {toggleLoginSignUp, toggleIsUserLogged, addText, addAllImageData, addDetailImage } = appSlice.actions;
export default appSlice.reducer;
