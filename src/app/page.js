'use client'
import { useState } from 'react';
import TodoList from './components/TodoList.jsx'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { todosSlice } from './todosSlice.js';
import { loadingSlice } from './loadingSlice';
import { userSlice } from './userSlice';
import Header from './components/core/Header.jsx'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default function Home() {
  
  const store = configureStore({
    reducer:{
      todos:todosSlice.reducer,
      loading:loadingSlice.reducer,  
      user:userSlice.reducer,    
    }
  });
  


  
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header/>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-2xl font-bold mb-4">Todo List App</h1>
        <TodoList/>
      </div>
      </LocalizationProvider>
    </Provider>
  );
}
