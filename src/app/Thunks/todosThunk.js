import axios from "axios"
import { loadingCompleted, loadingFailed, loadingStarted } from "../loadingSlice";
import { todosUpdated  } from "../todosSlice";

export const loadTodos = ()=> async (dispatch) =>{
    // change the loading state in store
    dispatch(loadingStarted());
    try{
        const response = await axios.get("http://localhost:7000/api/todos");
        let todos = response.data;
        console.log(todos);
        dispatch(loadingCompleted(todos));
    }catch(err)
    {
        // change the loading state in store
        dispatch(loadingFailed(err));
    }
}
export const createTodo = (newTodo) => async (dispatch,getState) =>{
    
    try{
        const response = await axios.post("http://localhost:7000/api/todos",{...newTodo});
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
        const response = await axios.delete(`http://localhost:7000/api/todos/${id}`);
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
        const response = await axios.put(`http://localhost:7000/api/todos/${id}`,{isCompleted:true});
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
