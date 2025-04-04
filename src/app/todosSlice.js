const { createSlice } = require("@reduxjs/toolkit");

export const todosSlice = createSlice({
    name:"todos",
    initialState:{
        values:[{
            id:1,
            text:"first task",
            isCompleted:false
        }]
    },
    reducers:{
        createTodo: (state,action)=>{
            const text= action.payload;
            let todo = {id:state.values[state.values.length -1].id+1 , text:text,isCompleted:false};
            state.values = [...state.values,todo];
        },
        deleteTodo: (state,action)=>{
            const id = action.payload;
            state.values=state.values.filter((todo)=>todo.id !== id);
        },
        markTodoAsCompleted:(state,action)=>{
            const id = action.payload;
            const todo = state.values.find(todo=> todo.id === id);
            todo.isCompleted = true;
        },
    }
});
export const {createTodo,deleteTodo,markTodoAsCompleted} = todosSlice.actions;