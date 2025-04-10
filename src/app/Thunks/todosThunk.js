import axios from "axios"
import { loadingCompleted, loadingFailed, loadingStarted } from "../loadingSlice";
import { todosUpdated  } from "../todosSlice";
import nextConfig from "../../../next.config.mjs";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const loadTodos = ()=> async (dispatch) =>{
//     // change the loading state in store
//     dispatch(loadingStarted());
    
//     try{
//         const response = await axios.get(nextConfig.env.API_URL+"/api/todos");
//         let todos = response.data;
//         console.log(todos);
//         dispatch(loadingCompleted(todos));
//     }catch(err)
//     {
//         // change the loading state in store
//         dispatch(loadingFailed(err));
//     }
// }
export const createTodo = (newTodo) => async (dispatch,getState) =>{
    
    try{
        const response = await axios.post(nextConfig.env.API_URL+"/api/todos",{...newTodo},{withCredentials:true});
        let todo = response.data;
        console.log(response.status);
        let newTodos = getState().todos.values.concat(todo);
        dispatch(todosUpdated(newTodos))
        // dispatch(loadingCompleted(todos));
    }catch(err)
    {
        // change the loading state in store
        // dispatch(loadingFailed(err));
    }
}
export const deleteTodo = (id) => async (dispatch,getState) =>{
    
    try{
        const response = await axios.delete(nextConfig.env.API_URL+`/api/todos/${id}`,{withCredentials:true});
        let todo = response.data;
        console.log(todo);
        let newTodos = getState().todos.values.filter(todo=>todo._id !== id);
        dispatch(todosUpdated(newTodos))
        // dispatch(loadingCompleted(todos));
    }catch(err)
    {
        // change the loading state in store
        // dispatch(loadingFailed(err));
    }
}
export const markTodoAsCompleted = (id) => async (dispatch,getState) =>{
    
    try{
        const response = await axios.put(nextConfig.env.API_URL+`/api/todos/${id}`,{isCompleted:true},{withCredentials:true});
        let newTodo = response.data;
        console.log(newTodo);
        let newTodos = getState().todos.values.map(todo => todo._id===id? newTodo:todo);
        console.log(newTodos);
        dispatch(todosUpdated(newTodos))
        // dispatch(loadingCompleted(todos));
    }catch(err)
    {
        // change the loading state in store
        // dispatch(loadingFailed(err));
    }
}


export const loadTodos = createAsyncThunk("todos/loadTodos",async ()=>{
    let response = await axios.get(nextConfig.env.API_URL+"/api/todos",{withCredentials:true});
    return response.data;
})