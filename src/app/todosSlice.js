import { loadingCompleted } from "./loadingSlice";
import { loadTodos } from "./Thunks/todosThunk";

const { createSlice } = require("@reduxjs/toolkit");

export const todosSlice = createSlice({
    name:"todos",
    initialState:{
        values:[]
        ,loadingStatus:''
    },
    reducers:{
        // createTodo: (state,action)=>{
        //     const text= action.payload;
        //     let todo = {id:state.values[state.values.length -1].id+1 , text:text,isCompleted:false};
        //     state.values = [...state.values,todo];
        // },
        // deleteTodo: (state,action)=>{
        //     const id = action.payload;
        //     state.values=state.values.filter((todo)=>todo.id !== id);
        // },
        // markTodoAsCompleted:(state,action)=>{
        //     console.log("inside todoSlice");
        //     const id = action.payload;
        //     console.log(id);
        //     const todo = state.values.find(todo=> todo._id === id);
        //     todo.isCompleted = true;
        // },
        todosUpdated:(state,action)=>{
            let newTodos = action.payload;
            state.values = newTodos;
        }
    },
    extraReducers:(builder)=>{
        // builder.addCase(loadingCompleted,(state,action)=>{
        //     state.values = action.payload;
        // }),
        builder.addCase(loadTodos.pending,(state,action)=>{
            state.loadingStatus = "loading";
        }), 
        builder.addCase(loadTodos.fulfilled,(state,action)=>{
            state.loadingStatus = "completed";
            state.values = action.payload;
        }), 
        builder.addCase(loadTodos.rejected,(state,action)=>{
            state.loadingStatus = "failed";
        })
    }
});
export const {createTodo,deleteTodo,markTodoAsCompleted,todosUpdated} = todosSlice.actions;