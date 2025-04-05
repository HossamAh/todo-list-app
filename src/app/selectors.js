import { createSelector } from "@reduxjs/toolkit";

export const getTodos= state=>state.todos.values;
export const getTodosLoading= state=>state.loading.values;
// no memoization
// export const getCompletedTodos = state=>{
//     return getTodos(state).filter(t=>t.isCompleted)
// }
// export const getIncompletedTodos = state=>{
//     return getTodos(state).filter(t=>!t.isCompleted)
// }

//with memoization of the return of the combine selectors
export const getCompletedTodos = createSelector([getTodos],(todos)=>todos.filter(t=>t.isCompleted));
export const getIncompletedTodos = createSelector([getTodos],(todos)=>todos.filter(t=>!t.isCompleted));
