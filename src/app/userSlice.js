import { getUser } from "./Thunks/userThunk";
const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:NaN
        ,loadingStatus:''
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getUser.pending,(state,action)=>{
            state.loadingStatus = "loading";
        }), 
        builder.addCase(getUser.fulfilled,(state,action)=>{
            state.loadingStatus = "completed";
            state.user = action.payload;
        }), 
        builder.addCase(getUser.rejected,(state,action)=>{
            state.loadingStatus = "failed";
        })
    }
});