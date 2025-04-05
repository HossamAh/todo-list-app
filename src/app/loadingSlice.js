const { createSlice } = require("@reduxjs/toolkit");

export const loadingSlice = createSlice({
    name:"loading",
    initialState:{
        values:{
            completed:false,
            successful:false,
        }
    },
    reducers:{
        loadingCompleted: (state)=>{
            state.values.completed = true;
            state.values.successful = true;
        },
        loadingFailed: (state)=>{
            state.values.completed = true;
            state.values.successful = false;
        },
        loadingStarted: (state)=>{
            state.values.completed = false;
        },
    }
});
export const {loadingCompleted,loadingStarted,loadingFailed} = loadingSlice.actions;