'use client'
import { useState } from 'react';
import TodoList from './components/TodoList.jsx'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { todosSlice } from './todosSlice.js';
import { loadingSlice } from './loadingSlice';

export default function Home() {
  
  const store = configureStore({
    reducer:{
      todos:todosSlice.reducer,
      loading:loadingSlice.reducer,      
    }
  });
  


  
  return (
    <Provider store={store}>
      <div className="bg-white p-4 text-black space-y-4 h-screen">
        <TodoList/>
      </div>
    </Provider>
  );
}
