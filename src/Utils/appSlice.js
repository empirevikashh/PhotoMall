
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"myStore",
    initialState:{
        searchText:null,
        allImageData:[]
    },
    reducers:{
        addText:(state,action)=>{
            state.searchText = action.payload;
        },
        addAllImageData:(state,action)=>{
            // console.log(action);
            if (action.payload.length > 0) {
                action.payload.forEach(hit => {
                  state.allImageData.push(hit);
                });
              } 
        }
    }
});

export const {addText,addAllImageData} = appSlice.actions;
export default appSlice.reducer;