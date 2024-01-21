import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"myStore",
    initialState:{
        searchText:null,
        allImageData:[],
        detailImage:null
    },
    reducers:{
        addText:(state,action)=>{
            state.searchText = action.payload;
        },
        addAllImageData:(state,action)=>{
            state.detailImage = [];
            if (action.payload.length > 0) {
                action.payload.forEach(hit => {
                  state.allImageData.push(hit);
                });
              } 
        },
        addDetailImage:(state,action)=>{
            state.detailImage = action.payload;
        }

    }
});

export const {addText,addAllImageData,addDetailImage} = appSlice.actions;
export default appSlice.reducer;